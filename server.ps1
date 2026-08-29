# Lightweight Localhost & Network HTTP Server with REST API for Morfi POS
param([int]$Port = 8080)

$root = $PSScriptRoot
$dataFile = Join-Path $root "data.json"

# Discover Local IPv4 Address
$localIp = (Get-NetIPAddress -AddressFamily IPv4 -Type Unicast | Where-Object { $_.IPAddress -notlike '127.*' -and $_.IPAddress -notlike '169.254.*' } | Select-Object -ExpandProperty IPAddress -First 1)
if (-not $localIp) { $localIp = "127.0.0.1" }

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Prefixes.Add("http://127.0.0.1:$Port/")

# Try adding local IP prefix safely
try {
    $listener.Prefixes.Add("http://${localIp}:${Port}/")
} catch {}

try {
    $listener.Start()
} catch {
    # Re-initialize only on localhost if network binding requires admin ACL
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$Port/")
    $listener.Prefixes.Add("http://127.0.0.1:$Port/")
    $listener.Start()
}

Write-Host "==========================================" -ForegroundColor Green
Write-Host "MORFI POS SERVER RUNNING!" -ForegroundColor Cyan
Write-Host "Local URL: http://localhost:$Port/" -ForegroundColor Yellow
Write-Host "Mobile / Manager Network URL: http://${localIp}:${Port}/" -ForegroundColor Yellow
Write-Host "Data File: $dataFile" -ForegroundColor Gray
Write-Host "==========================================" -ForegroundColor Green

$mimeTypes = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".svg"  = "image/svg+xml"
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        # Enable CORS for local network devices
        $response.Headers.Add("Access-Control-Allow-Origin: *")
        $response.Headers.Add("Access-Control-Allow-Methods: GET, POST, OPTIONS")
        $response.Headers.Add("Access-Control-Allow-Headers: Content-Type")

        if ($request.HttpMethod -eq "OPTIONS") {
            $response.StatusCode = 200
            $response.Close()
            continue
        }

        $urlPath = $request.Url.AbsolutePath

        # Network Info Endpoint for QR Code & Phone Access
        if ($urlPath -eq "/api/info") {
            $infoObj = @{
                localIp = $localIp
                port = $Port
                mobileUrl = "http://${localIp}:${Port}/"
            }
            $infoJson = $infoObj | ConvertTo-Json
            $infoBytes = [System.Text.Encoding]::UTF8.GetBytes($infoJson)
            $response.ContentType = "application/json; charset=utf-8"
            $response.ContentLength64 = $infoBytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($infoBytes, 0, $infoBytes.Length)
            $response.Close()
            continue
        }

        # REST API endpoint for persistent disk data
        if ($urlPath -eq "/api/data") {
            if ($request.HttpMethod -eq "GET") {
                if (Test-Path $dataFile) {
                    $bytes = [System.IO.File]::ReadAllBytes($dataFile)
                } else {
                    $bytes = [System.Text.Encoding]::UTF8.GetBytes("{}")
                }
                $response.ContentType = "application/json; charset=utf-8"
                $response.ContentLength64 = $bytes.Length
                $response.StatusCode = 200
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            }
            elseif ($request.HttpMethod -eq "POST") {
                $reader = New-Object System.IO.StreamReader($request.InputStream, $request.ContentEncoding)
                $body = $reader.ReadToEnd()
                $reader.Close()

                [System.IO.File]::WriteAllText($dataFile, $body, [System.Text.Encoding]::UTF8)

                $resJson = '{"status":"saved"}'
                $outBytes = [System.Text.Encoding]::UTF8.GetBytes($resJson)
                $response.ContentType = "application/json; charset=utf-8"
                $response.ContentLength64 = $outBytes.Length
                $response.StatusCode = 200
                $response.OutputStream.Write($outBytes, 0, $outBytes.Length)
            }
            $response.Close()
            continue
        }

        if ($urlPath -eq "/") { $urlPath = "/index.html" }

        $filePath = Join-Path $root ($urlPath.TrimStart('/').Replace('/', '\'))

        if (Test-Path $filePath -PathType Leaf) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = "application/octet-stream"
            if ($mimeTypes.ContainsKey($ext)) { $mime = $mimeTypes[$ext] }

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentType = $mime
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $res404 = "404 - File Not Found"
            $buffer = [System.Text.Encoding]::UTF8.GetBytes($res404)
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        $response.Close()
    } catch {
        # Catch any request errors gracefully
    }
}
