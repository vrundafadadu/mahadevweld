import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const SMTP_USER = process.env.SMTP_USER || 'testerbemain@gmail.com';
const SMTP_PASS = process.env.SMTP_PASS || 'qyquibvuwwefczsy';
const RECIPIENT_EMAILS = process.env.RECIPIENT_EMAILS || 'maahi7073739837@gmail.com,yogeshsuthar248@gmail.com';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS
  }
});

export async function sendInquiryEmail(data) {
  const { formType, name, phone, email, service, areaSize, location, estimatedPrice, message, notes } = data;

  const isQuote = formType === 'quote';
  const subject = isQuote 
    ? `🔔 [New Quote Request] ${service || 'Fabrication'} - ${name || 'Customer'}` 
    : `📩 [New Contact Inquiry] ${service || 'General'} - ${name || 'Customer'}`;

  const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
      <div style="background: linear-gradient(135deg, #0f172a, #1e293b); padding: 24px; text-align: center; border-bottom: 3px solid #ea580c;">
        <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 0.5px;">MAHADEV <span style="color: #f97316;">WELD</span></h1>
        <p style="color: #94a3b8; margin: 6px 0 0 0; font-size: 13px;">Heavy Industrial Fabrication & Demolition Works</p>
      </div>

      <div style="padding: 24px;">
        <div style="display: inline-block; background-color: #fff7ed; border: 1px solid #fed7aa; color: #c2410c; padding: 6px 14px; border-radius: 20px; font-weight: 700; font-size: 12px; margin-bottom: 16px; text-transform: uppercase;">
          ${isQuote ? 'Instant Quote Calculation' : 'Direct Website Inquiry'}
        </div>

        <h2 style="color: #0f172a; margin: 0 0 16px 0; font-size: 18px;">
          Customer Details & Project Inquiry
        </h2>

        <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #334155; margin-bottom: 20px;">
          <tbody>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: 600; width: 140px; color: #64748b;">Customer Name</td>
              <td style="padding: 10px 0; font-weight: 700; color: #0f172a;">${name || 'Not provided'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Phone Number</td>
              <td style="padding: 10px 0; font-weight: 700; color: #ea580c;">
                <a href="tel:${phone || ''}" style="color: #ea580c; text-decoration: none;">${phone || 'Not provided'}</a>
              </td>
            </tr>
            ${email ? `
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Email Address</td>
              <td style="padding: 10px 0; color: #0f172a;"><a href="mailto:${email}" style="color: #0284c7;">${email}</a></td>
            </tr>
            ` : ''}
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Selected Service</td>
              <td style="padding: 10px 0; font-weight: 600; color: #0f172a;">${service || 'General Inquiry'}</td>
            </tr>
            ${areaSize ? `
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Estimated Area / Span</td>
              <td style="padding: 10px 0; color: #0f172a;">${areaSize} sq ft</td>
            </tr>
            ` : ''}
            ${location ? `
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Project Location</td>
              <td style="padding: 10px 0; color: #0f172a;">${location}</td>
            </tr>
            ` : ''}
            ${estimatedPrice ? `
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: 600; color: #64748b;">Indicative Estimate</td>
              <td style="padding: 10px 0; font-weight: 700; color: #16a34a;">${estimatedPrice}</td>
            </tr>
            ` : ''}
          </tbody>
        </table>

        ${(message || notes) ? `
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; margin-bottom: 20px;">
          <div style="font-size: 12px; font-weight: 700; color: #64748b; margin-bottom: 6px; text-transform: uppercase;">Message / Scope Details:</div>
          <div style="font-size: 14px; color: #0f172a; line-height: 1.5; white-space: pre-wrap;">${message || notes}</div>
        </div>
        ` : ''}

        <div style="font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 12px;">
          Inquiry received on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
        </div>
      </div>

      <div style="background-color: #f1f5f9; padding: 14px; text-align: center; font-size: 12px; color: #64748b;">
        Mahadev Weld · Bali Falna Road, Near Devshri Hotel, Khudala 306116, Rajasthan
      </div>
    </div>
  `;

  const recipients = RECIPIENT_EMAILS.split(',').map(e => e.trim()).filter(Boolean);

  const mailOptions = {
    from: `"Mahadev Weld Website" <${SMTP_USER}>`,
    to: recipients,
    replyTo: email || undefined,
    subject: subject,
    text: `New Inquiry from ${name || 'Customer'} (${phone || 'No phone'}):\nService: ${service}\nMessage: ${message || notes || 'None'}`,
    html: htmlContent
  };

  return await transporter.sendMail(mailOptions);
}
