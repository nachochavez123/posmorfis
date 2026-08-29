# Creates a Desktop shortcut for Morfi POS
$desktop = [System.Environment]::GetFolderPath("Desktop")
$shortcutPath = Join-Path $desktop "Morfi POS.lnk"
$targetPath = Join-Path $PSScriptRoot "MorfiPOS.exe"

$wshShell = New-Object -ComObject WScript.Shell
$shortcut = $wshShell.CreateShortcut($shortcutPath)
$shortcut.TargetPath = $targetPath
$shortcut.WorkingDirectory = $PSScriptRoot
$shortcut.Description = "Sistema POS Morfi Panchería Gourmet"
$shortcut.Save()

Write-Host "Acceso directo creado en el escritorio: $shortcutPath" -ForegroundColor Green
