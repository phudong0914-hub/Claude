$ErrorActionPreference = "Stop"

$port = 8080
$usedPorts = Get-NetTCPConnection -LocalAddress 127.0.0.1 -State Listen -ErrorAction SilentlyContinue |
  Select-Object -ExpandProperty LocalPort

while ($usedPorts -contains $port) {
  $port++
}

$appRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$serveRoot = Split-Path -Parent $appRoot
Write-Host "Serving Claude workspace from $serveRoot"
Write-Host "Open http://127.0.0.1:$port/claude-learning-web/"

Set-Location $serveRoot
python -m http.server $port --bind 127.0.0.1
