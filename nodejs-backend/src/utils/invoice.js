/**
 * Professional invoice HTML generator.
 * Uses 100% table-based layout with fully inline styles for html2pdf.js compatibility.
 */

const LOGO_BASE64 = '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';

const STATUS_LABELS = ['Pending', 'Accepted', 'In Progress', 'Completed', 'Cancelled'];
const SCHEDULE_LABELS = { morning: '9:00 AM - 12:00 PM', afternoon: '12:00 PM - 4:00 PM', evening: '4:00 PM - 7:00 PM' };

function currency(val) {
  return '&#8377;' + Number(val || 0).toFixed(2);
}

function fmtDate(d) {
  if (!d) return '';
  return new Date(d).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
}

function generateInvoiceHtml(order) {
  const user = order.user || {};
  const loc = order.location || {};
  const items = order.items || [];
  const invoiceNo = order.invoice_number || 'INV-' + order.id;
  const invoiceDate = fmtDate(order.created_at);
  const statusLabel = STATUS_LABELS[order.status] || order.status;
  const paymentBadge = order.payment_status
    ? '<span style="background:#dcfce7;color:#15803d;padding:2px 10px;border-radius:10px;font-size:11px;font-weight:700;">PAID</span>'
    : '<span style="background:#fee2e2;color:#dc2626;padding:2px 10px;border-radius:10px;font-size:11px;font-weight:700;">UNPAID</span>';
  const scheduleSlot = order.schedule ? (SCHEDULE_LABELS[order.schedule] || order.schedule) : '';

  // Build items rows with alternating background
  const itemRows = items.map((item, i) => {
    const qty = item.qty || item.quantity || 1;
    const bg = i % 2 === 0 ? '#ffffff' : '#f9fafb';
    return `<tr style="background:${bg};">
      <td style="border:1px solid #e5e7eb;padding:10px 14px;text-align:center;font-size:13px;color:#6b7280;">${i + 1}</td>
      <td style="border:1px solid #e5e7eb;padding:10px 14px;font-size:13px;color:#1f2937;">${item.service?.title || 'Service #' + item.service_id}</td>
      <td style="border:1px solid #e5e7eb;padding:10px 14px;text-align:right;font-size:13px;color:#374151;">${currency(item.price)}</td>
      <td style="border:1px solid #e5e7eb;padding:10px 14px;text-align:center;font-size:13px;color:#374151;">${qty}</td>
      <td style="border:1px solid #e5e7eb;padding:10px 14px;text-align:right;font-size:13px;font-weight:600;color:#1f2937;">${currency(item.price * qty)}</td>
    </tr>`;
  }).join('');

  // Build totals rows
  let totalsRows = `
    <tr>
      <td style="border:none;padding:6px 14px;font-size:13px;color:#6b7280;">Subtotal</td>
      <td style="border:none;padding:6px 14px;text-align:right;font-size:13px;color:#374151;">${currency(order.sub_total)}</td>
    </tr>
    <tr>
      <td style="border:none;padding:6px 14px;font-size:13px;color:#6b7280;">Tax</td>
      <td style="border:none;padding:6px 14px;text-align:right;font-size:13px;color:#374151;">${currency(order.tax)}</td>
    </tr>`;

  if (order.coupon_amount > 0) {
    totalsRows += `
    <tr>
      <td style="border:none;padding:6px 14px;font-size:13px;color:#6b7280;">Discount${order.coupon_code ? ' (' + order.coupon_code + ')' : ''}</td>
      <td style="border:none;padding:6px 14px;text-align:right;font-size:13px;color:#16a34a;font-weight:600;">-${currency(order.coupon_amount)}</td>
    </tr>`;
  }

  if (order.delivery_charge > 0) {
    totalsRows += `
    <tr>
      <td style="border:none;padding:6px 14px;font-size:13px;color:#6b7280;">Delivery Charge</td>
      <td style="border:none;padding:6px 14px;text-align:right;font-size:13px;color:#374151;">${currency(order.delivery_charge)}</td>
    </tr>`;
  }

  return `<!DOCTYPE html>
<html><head><meta charset="utf-8"><title>Invoice ${invoiceNo}</title>
<style>*{margin:0;padding:0;box-sizing:border-box}body{font-family:Arial,Helvetica,sans-serif;color:#333;background:#fff}</style>
</head><body>

<!-- HEADER: Logo + Invoice title -->
<table style="width:100%;border-collapse:collapse;margin-bottom:0;">
<tr>
  <td style="border:none;padding:0;vertical-align:middle;width:50%;">
    <img src="data:image/png;base64,${LOGO_BASE64}" alt="JusMoto" style="height:40px;display:block;" />
  </td>
  <td style="border:none;padding:0;text-align:right;vertical-align:middle;width:50%;">
    <div style="font-size:28px;font-weight:800;color:#1a1a2e;letter-spacing:2px;">INVOICE</div>
  </td>
</tr>
</table>

<!-- Red accent bar -->
<div style="height:4px;background:linear-gradient(to right,#e31b23,#ff6b6b,#e31b23);margin:16px 0 20px 0;border-radius:2px;"></div>

<!-- Invoice meta row -->
<table style="width:100%;border-collapse:collapse;margin-bottom:22px;">
<tr>
  <td style="border:none;padding:0;vertical-align:top;">
    <table style="border-collapse:collapse;">
      <tr>
        <td style="border:none;padding:2px 0;font-size:12px;color:#9ca3af;font-weight:600;">Invoice No.</td>
        <td style="border:none;padding:2px 0 2px 12px;font-size:13px;color:#1f2937;font-weight:700;">${invoiceNo}</td>
      </tr>
      <tr>
        <td style="border:none;padding:2px 0;font-size:12px;color:#9ca3af;font-weight:600;">Date</td>
        <td style="border:none;padding:2px 0 2px 12px;font-size:13px;color:#1f2937;">${invoiceDate}</td>
      </tr>
      <tr>
        <td style="border:none;padding:2px 0;font-size:12px;color:#9ca3af;font-weight:600;">Status</td>
        <td style="border:none;padding:2px 0 2px 12px;font-size:13px;color:#1f2937;font-weight:600;">${statusLabel}</td>
      </tr>
      <tr>
        <td style="border:none;padding:2px 0;font-size:12px;color:#9ca3af;font-weight:600;">Payment</td>
        <td style="border:none;padding:2px 0 2px 12px;font-size:13px;">${paymentBadge}</td>
      </tr>
    </table>
  </td>
  <td style="border:none;padding:0;text-align:right;vertical-align:top;">
    <div style="font-size:10px;text-transform:uppercase;color:#9ca3af;font-weight:700;letter-spacing:1px;margin-bottom:4px;">From</div>
    <div style="font-size:13px;color:#1f2937;font-weight:700;">JusMoto Car Care</div>
    <div style="font-size:12px;color:#6b7280;line-height:1.6;">Redefining Vehicle Care</div>
    <div style="font-size:12px;color:#6b7280;">support@jusmoto.com</div>
  </td>
</tr>
</table>

<!-- Bill To + Service Address -->
<table style="width:100%;border-collapse:collapse;margin-bottom:24px;">
<tr>
  <td style="border:none;padding:0;vertical-align:top;width:50%;padding-right:16px;">
    <table style="width:100%;border-collapse:collapse;background:#f8fafc;border-radius:8px;">
      <tr><td style="border:none;padding:14px 16px;">
        <div style="font-size:10px;text-transform:uppercase;color:#e31b23;font-weight:700;letter-spacing:1px;margin-bottom:8px;">Bill To</div>
        <div style="font-size:14px;font-weight:700;color:#1f2937;margin-bottom:2px;">${user.first_name || ''} ${user.last_name || ''}</div>
        <div style="font-size:12px;color:#6b7280;line-height:1.7;">${user.email || ''}${user.phone ? '<br>' + user.phone : ''}</div>
      </td></tr>
    </table>
  </td>
  <td style="border:none;padding:0;vertical-align:top;width:50%;padding-left:16px;">
    <table style="width:100%;border-collapse:collapse;background:#f8fafc;border-radius:8px;">
      <tr><td style="border:none;padding:14px 16px;">
        <div style="font-size:10px;text-transform:uppercase;color:#e31b23;font-weight:700;letter-spacing:1px;margin-bottom:8px;">Service Address</div>
        <div style="font-size:12px;color:#374151;line-height:1.7;">
          ${loc.title ? '<span style="font-weight:700;">' + loc.title + '</span><br>' : ''}${loc.address || '-'}${loc.post_code ? '<br>PIN: ' + loc.post_code : ''}${loc.phone ? '<br>Ph: ' + loc.phone : ''}
        </div>
      </td></tr>
    </table>
  </td>
</tr>
</table>

${order.date || scheduleSlot ? `
<!-- Schedule info bar -->
<table style="width:100%;border-collapse:collapse;margin-bottom:18px;background:#fffbeb;border:1px solid #fde68a;border-radius:6px;">
<tr><td style="border:none;padding:10px 16px;font-size:12px;color:#92400e;">
  <span style="font-weight:700;">Scheduled:</span>
  ${order.date ? fmtDate(order.date) : ''}${order.date && scheduleSlot ? ' &bull; ' : ''}${scheduleSlot}
</td></tr>
</table>
` : ''}

<!-- Items table -->
<table style="width:100%;border-collapse:collapse;margin-bottom:4px;">
<thead>
  <tr style="background:#1a1a2e;">
    <th style="border:1px solid #1a1a2e;padding:12px 14px;text-align:center;font-size:11px;text-transform:uppercase;color:#ffffff;font-weight:700;letter-spacing:0.5px;width:46px;">#</th>
    <th style="border:1px solid #1a1a2e;padding:12px 14px;text-align:left;font-size:11px;text-transform:uppercase;color:#ffffff;font-weight:700;letter-spacing:0.5px;">Service / Product</th>
    <th style="border:1px solid #1a1a2e;padding:12px 14px;text-align:right;font-size:11px;text-transform:uppercase;color:#ffffff;font-weight:700;letter-spacing:0.5px;width:100px;">Price</th>
    <th style="border:1px solid #1a1a2e;padding:12px 14px;text-align:center;font-size:11px;text-transform:uppercase;color:#ffffff;font-weight:700;letter-spacing:0.5px;width:56px;">Qty</th>
    <th style="border:1px solid #1a1a2e;padding:12px 14px;text-align:right;font-size:11px;text-transform:uppercase;color:#ffffff;font-weight:700;letter-spacing:0.5px;width:110px;">Amount</th>
  </tr>
</thead>
<tbody>
  ${itemRows}
</tbody>
</table>

<!-- Totals section — right aligned -->
<table style="width:100%;border-collapse:collapse;margin-bottom:0;">
<tr>
  <td style="border:none;padding:0;width:55%;vertical-align:top;padding-top:12px;">
    <div style="font-size:11px;color:#9ca3af;font-style:italic;">Order #${order.id}</div>
  </td>
  <td style="border:none;padding:0;width:45%;vertical-align:top;">
    <table style="width:100%;border-collapse:collapse;">
      ${totalsRows}
      <tr><td colspan="2" style="border:none;padding:4px 14px;"><div style="height:2px;background:#e5e7eb;"></div></td></tr>
      <tr style="background:#fef2f2;">
        <td style="border:none;padding:12px 14px;font-size:16px;font-weight:800;color:#1a1a2e;">Grand Total</td>
        <td style="border:none;padding:12px 14px;text-align:right;font-size:16px;font-weight:800;color:#e31b23;">${currency(order.total)}</td>
      </tr>
    </table>
  </td>
</tr>
</table>

<!-- Footer -->
<table style="width:100%;border-collapse:collapse;margin-top:36px;">
<tr><td style="border:none;padding:0;"><div style="height:1px;background:#e5e7eb;margin-bottom:16px;"></div></td></tr>
<tr><td style="border:none;padding:0;text-align:center;">
  <div style="font-size:13px;color:#6b7280;margin-bottom:4px;">Thank you for choosing <span style="color:#e31b23;font-weight:700;">JusMoto</span>!</div>
  <div style="font-size:10px;color:#9ca3af;">This is a computer-generated invoice and does not require a signature.</div>
</td></tr>
</table>

</body></html>`;
}

module.exports = { generateInvoiceHtml };
