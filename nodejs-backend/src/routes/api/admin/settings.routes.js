const router = require('express').Router();
const { StaticOption } = require('../../../models');
const mailConfig = require('../../../config/mail');
const emailService = require('../../../services/email.service');
const { formatError } = require('../../../utils/formatError');

const SMTP_KEYS = [
  'smtp_host',
  'smtp_port',
  'smtp_username',
  'smtp_password',
  'smtp_from_email',
  'smtp_from_name',
  'smtp_secure'
];

/**
 * @route   GET /api/admin/settings/smtp
 * @desc    Get current SMTP configuration
 * @access  Admin
 */
router.get('/smtp', async (req, res) => {
  try {
    const dbSettings = await StaticOption.findAll({
      where: { option_name: SMTP_KEYS }
    });

    const dbMap = {};
    dbSettings.forEach(s => { dbMap[s.option_name] = s.option_value; });

    res.json({
      success: true,
      data: {
        smtp_host: dbMap.smtp_host || mailConfig.host,
        smtp_port: parseInt(dbMap.smtp_port || mailConfig.port, 10),
        smtp_username: dbMap.smtp_username || mailConfig.auth.user,
        smtp_password: dbMap.smtp_password ? '********' : '',
        smtp_from_email: dbMap.smtp_from_email || mailConfig.from.address,
        smtp_from_name: dbMap.smtp_from_name || mailConfig.from.name,
        smtp_secure: dbMap.smtp_secure === 'true' || mailConfig.secure || false
      }
    });
  } catch (error) {
    console.error('Get SMTP settings error:', error);
    res.status(500).json({ success: false, message: 'Failed to get SMTP settings' });
  }
});

/**
 * @route   PUT /api/admin/settings/smtp
 * @desc    Update SMTP configuration
 * @access  Admin
 */
router.put('/smtp', async (req, res) => {
  try {
    const { smtp_host, smtp_port, smtp_username, smtp_password, smtp_from_email, smtp_from_name, smtp_secure } = req.body;

    if (!smtp_host || !smtp_port || !smtp_username || !smtp_from_email) {
      return res.status(400).json({
        success: false,
        message: 'smtp_host, smtp_port, smtp_username, and smtp_from_email are required'
      });
    }

    const settings = {
      smtp_host,
      smtp_port: String(smtp_port),
      smtp_username,
      smtp_from_email,
      smtp_from_name: smtp_from_name || 'JusMoto',
      smtp_secure: String(smtp_secure === true || smtp_secure === 'true')
    };

    // Only update password if provided (not masked placeholder)
    if (smtp_password && smtp_password !== '********') {
      settings.smtp_password = smtp_password;
    }

    for (const [key, value] of Object.entries(settings)) {
      await StaticOption.upsert({ option_name: key, option_value: value });
    }

    // Reload the email transporter with new settings
    await emailService.reloadTransporter();

    res.json({ success: true, message: 'SMTP settings updated successfully' });
  } catch (error) {
    console.error('Update SMTP settings error:', error);
    res.status(500).json({ success: false, message: 'Failed to update SMTP settings' });
  }
});

/**
 * @route   POST /api/admin/settings/smtp/test
 * @desc    Send a test email with current SMTP config
 * @access  Admin
 */
router.post('/smtp/test', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, message: 'email is required' });
    }

    const result = await emailService.send(
      email,
      'JusMoto SMTP Test',
      `<div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 30px;">
        <h2 style="color: #e31b23;">SMTP Configuration Test</h2>
        <p>This is a test email from <strong>JusMoto</strong>.</p>
        <p>If you received this email, your SMTP settings are working correctly.</p>
        <p style="color: #888; font-size: 12px; margin-top: 30px;">Sent at: ${new Date().toISOString()}</p>
      </div>`
    );

    if (result.success) {
      res.json({ success: true, message: 'Test email sent successfully', messageId: result.messageId });
    } else {
      res.status(400).json({ success: false, message: `Failed to send test email: ${result.error}` });
    }
  } catch (error) {
    console.error('SMTP test error:', error);
    res.status(500).json({ success: false, message: formatError(error) });
  }
});

module.exports = router;
