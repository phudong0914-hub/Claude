$ErrorActionPreference = "Stop"

$appRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$serveRoot = Split-Path -Parent $appRoot
$preferredPort = 8080

function Test-HttpServer {
  param([int]$Port)

  try {
    $response = Invoke-WebRequest -UseBasicParsing -Uri "http://127.0.0.1:$Port/" -TimeoutSec 2
    return $response.StatusCode -eq 200
  } catch {
    return $false
  }
}

$port = $preferredPort
$started = $false

if (-not (Test-HttpServer -Port $port)) {
  $usedPorts = Get-NetTCPConnection -LocalAddress 127.0.0.1 -State Listen -ErrorAction SilentlyContinue |
    Select-Object -ExpandProperty LocalPort

  while ($usedPorts -contains $port) {
    $port++
  }

  $log = Join-Path $env:TEMP "claude-learning-web-$port.log"
  $err = Join-Path $env:TEMP "claude-learning-web-$port.err.log"

  Start-Process -FilePath "python" `
    -ArgumentList @("-m", "http.server", "$port", "--bind", "127.0.0.1") `
    -WorkingDirectory $serveRoot `
    -RedirectStandardOutput $log `
    -RedirectStandardError $err `
    -WindowStyle Hidden | Out-Null

  Start-Sleep -Seconds 1
  $started = $true
}

$url = "http://127.0.0.1:$port/claude-learning-web/"

if (-not (Test-HttpServer -Port $port)) {
  throw "Không khởi động được Claude Learning Web tại $url. Hãy kiểm tra Python hoặc chạy start-local.ps1 trong thư mục project."
}

Start-Process $url

if ($started) {
  Write-Host "Claude Learning Web đã được khởi động: $url"
} else {
  Write-Host "Claude Learning Web đang chạy sẵn: $url"
}
