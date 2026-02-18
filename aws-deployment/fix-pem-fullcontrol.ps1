# Fix PEM permissions - Grant FullControl to current user only

$pemFile = "D:\Claude\JusMoto-WebApp\aws-deployment\jusmoto.pem"

Write-Host "Fixing permissions for: $pemFile"
Write-Host ""

# Method 1: Using icacls
Write-Host "Resetting permissions..."
& icacls $pemFile /reset
& icacls $pemFile /inheritance:r
& icacls $pemFile /grant "${env:USERDOMAIN}\${env:USERNAME}:(F)"

Write-Host ""
Write-Host "Current permissions:"
& icacls $pemFile

Write-Host ""
Write-Host "Done! You can now connect with:"
Write-Host "ssh -i jusmoto.pem ubuntu@16.112.128.19"
