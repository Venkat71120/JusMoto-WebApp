# Fix PEM file permissions for SSH on Windows

$pemFile = "D:\Claude\JusMoto-WebApp\aws-deployment\jusmoto.pem"

# Get current ACL
$acl = Get-Acl $pemFile

# Disable inheritance and remove inherited permissions
$acl.SetAccessRuleProtection($true, $false)

# Remove all existing access rules
$acl.Access | ForEach-Object { $acl.RemoveAccessRule($_) } | Out-Null

# Add read permission for current user only
$currentUser = [System.Security.Principal.WindowsIdentity]::GetCurrent().Name
$accessRule = New-Object System.Security.AccessControl.FileSystemAccessRule(
    $currentUser,
    "Read",
    "Allow"
)
$acl.SetAccessRule($accessRule)

# Apply the new ACL
Set-Acl $pemFile $acl

Write-Host "Permissions fixed successfully for: $pemFile"
Write-Host "Current user: $currentUser"
Write-Host ""
Write-Host "You can now connect with:"
Write-Host "ssh -i jusmoto.pem ubuntu@16.112.128.19"
