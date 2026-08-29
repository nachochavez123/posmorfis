using System;
using System.Diagnostics;
using System.IO;
using System.Windows.Forms;

namespace MorfiPOS
{
    static class Program
    {
        [STAThread]
        static void Main()
        {
            Application.EnableVisualStyles();
            Application.SetCompatibleTextRenderingDefault(false);

            string appDir = AppDomain.CurrentDomain.BaseDirectory;
            string serverScript = Path.Combine(appDir, "server.ps1");

            // Launch background PowerShell HTTP server & Data API
            ProcessStartInfo serverInfo = new ProcessStartInfo
            {
                FileName = "powershell.exe",
                Arguments = "-ExecutionPolicy Bypass -NoProfile -WindowStyle Hidden -File \"" + serverScript + "\"",
                WorkingDirectory = appDir,
                CreateNoWindow = true,
                UseShellExecute = false
            };

            try
            {
                Process.Start(serverInfo);
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error al iniciar servidor Morfi POS: " + ex.Message, "Morfi POS Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }

            // Short pause for HTTP listener readiness
            System.Threading.Thread.Sleep(1200);

            // Launch default web browser pointing to POS application
            try
            {
                Process.Start(new ProcessStartInfo("http://localhost:8080/") { UseShellExecute = true });
            }
            catch (Exception ex)
            {
                MessageBox.Show("Error al abrir navegador: " + ex.Message, "Morfi POS Error", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
    }
}
