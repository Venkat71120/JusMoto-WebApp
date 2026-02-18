# Fix AWS Security Group for HTTP Access

## Problem
Your website shows "ERR_CONNECTION_REFUSED" because AWS Security Group is blocking HTTP traffic on port 80.

## Solution: Update Security Group Rules

### Step-by-Step Instructions:

#### 1. Login to AWS Console
- Go to: https://console.aws.amazon.com/ec2/

#### 2. Navigate to Security Groups
- Click on **EC2** in Services
- Click on **Security Groups** in the left sidebar (under Network & Security)
- OR: Click on your instance → **Security** tab → Click on the security group name

#### 3. Find Your Security Group
- Look for the security group attached to instance `jusmoto-webapp`
- Probably named something like `jusmoto-sg` or `launch-wizard-X`

#### 4. Edit Inbound Rules
- Select the security group
- Click **Actions** → **Edit inbound rules**
- OR click the **Inbound rules** tab → **Edit inbound rules**

#### 5. Add/Verify These Rules

You should have these rules:

| Type | Protocol | Port Range | Source | Description |
|------|----------|------------|--------|-------------|
| SSH | TCP | 22 | My IP or 0.0.0.0/0 | SSH access |
| HTTP | TCP | 80 | 0.0.0.0/0 | HTTP web traffic |
| HTTPS | TCP | 443 | 0.0.0.0/0 | HTTPS web traffic |

#### 6. Add Missing Rules

If **HTTP (port 80)** rule is missing:
1. Click **Add rule**
2. **Type**: Select "HTTP" from dropdown
3. **Source**: Select "Anywhere-IPv4" (0.0.0.0/0)
4. **Description**: "HTTP web traffic"

If **HTTPS (port 443)** rule is missing:
1. Click **Add rule**
2. **Type**: Select "HTTPS" from dropdown
3. **Source**: Select "Anywhere-IPv4" (0.0.0.0/0)
4. **Description**: "HTTPS web traffic"

#### 7. Save Changes
- Click **Save rules**
- Wait 10-30 seconds for changes to propagate

#### 8. Test Your Website
- Open browser and go to: **http://16.112.128.19**
- Your website should now load!

---

## Visual Guide

### Current Security Group Rules (Example - INCORRECT)
```
Inbound Rules:
✓ SSH (22) - My IP only
✗ HTTP (80) - NOT CONFIGURED  ← This is the problem!
✗ HTTPS (443) - NOT CONFIGURED
```

### Fixed Security Group Rules (CORRECT)
```
Inbound Rules:
✓ SSH (22) - My IP only
✓ HTTP (80) - 0.0.0.0/0  ← Fixed!
✓ HTTPS (443) - 0.0.0.0/0  ← Fixed!
```

---

## Alternative: Use AWS CLI (If you have it installed)

If you have AWS CLI configured, you can add the rules with these commands:

```bash
# Get your security group ID
aws ec2 describe-instances --filters "Name=ip-address,Values=16.112.128.19" --query "Reservations[].Instances[].SecurityGroups[].GroupId" --output text

# Add HTTP rule (replace sg-xxxxx with your security group ID)
aws ec2 authorize-security-group-ingress \
    --group-id sg-xxxxx \
    --protocol tcp \
    --port 80 \
    --cidr 0.0.0.0/0

# Add HTTPS rule
aws ec2 authorize-security-group-ingress \
    --group-id sg-xxxxx \
    --protocol tcp \
    --port 443 \
    --cidr 0.0.0.0/0
```

---

## Troubleshooting

### If it still doesn't work after updating Security Group:

1. **Wait a bit**: Changes can take 30-60 seconds to propagate
2. **Clear browser cache**: Press Ctrl+Shift+R to hard refresh
3. **Try incognito/private window**
4. **Check from your phone**: Use mobile data to test (different network)

### Verify Server is Running:
```bash
ssh -i jusmoto.pem ubuntu@16.112.128.19
curl http://localhost
# Should return HTML
```

### Check Nginx Status:
```bash
sudo systemctl status nginx
# Should show "active (running)"
```

---

## Security Notes

**Why 0.0.0.0/0 for HTTP/HTTPS?**
- This means "allow from anywhere"
- This is NORMAL and SAFE for web servers
- HTTP/HTTPS ports (80/443) need to be publicly accessible
- Your application's login/authentication provides the security

**Keep SSH restricted!**
- SSH (port 22) should be restricted to "My IP" only
- NEVER set SSH to 0.0.0.0/0 unless absolutely necessary

---

## Quick Verification Checklist

- [ ] Logged into AWS Console
- [ ] Found Security Groups section
- [ ] Located my instance's security group
- [ ] Clicked "Edit inbound rules"
- [ ] Added HTTP rule (port 80, source: 0.0.0.0/0)
- [ ] Added HTTPS rule (port 443, source: 0.0.0.0/0)
- [ ] Clicked "Save rules"
- [ ] Waited 30 seconds
- [ ] Tested http://16.112.128.19 in browser
- [ ] Website loads successfully!

---

## Need Help?

If you're still having issues:
1. Take a screenshot of your Security Group inbound rules
2. Run this command and share output:
   ```bash
   ssh -i jusmoto.pem ubuntu@16.112.128.19 "curl -v http://localhost 2>&1 | head -n 20"
   ```
3. Check if your ISP or office network blocks outbound port 80

---

**Expected Result**: Website should be accessible at http://16.112.128.19 within 1 minute of updating the security group.
