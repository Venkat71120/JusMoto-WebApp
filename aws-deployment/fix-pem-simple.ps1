# Simple PEM permissions fix for Windows

$pemFile = "D:\Claude\JusMoto-WebApp\aws-deployment\jusmoto.pem"

# Remove all users except current user
icacls $pemFile /reset
icacls $pemFile /inheritance:r
icacls $pemFile /grant:r "${env:USERNAME}:(R)"

Write-Host ""
Write-Host "Permissions updated. Verifying..."
icacls $pemFile

Write-Host ""
Write-Host "You can now connect with:"
Write-Host "ssh -i jusmoto.pem ubuntu@16.112.128.19"
