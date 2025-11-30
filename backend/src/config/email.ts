import nodemailer, { Transporter } from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Email configuration
export const emailConfig = {
  host: process.env.EMAIL_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
};

// Create transporter
let transporter: Transporter | null = null;

export const createEmailTransporter = (): Transporter => {
  if (!transporter) {
    transporter = nodemailer.createTransport(emailConfig);
  }
  return transporter;
};

// Test email configuration
export const testEmailConnection = async (): Promise<boolean> => {
  try {
    const emailTransporter = createEmailTransporter();
    await emailTransporter.verify();
    console.log('✅ Email configuration verified');
    return true;
  } catch (error) {
    console.error('❌ Email configuration failed:', error);
    return false;
  }
};

// Email templates
export const emailTemplates = {
  consultationConfirmation: (data: any) => ({
    subject: `Consultation Request Received - Blanca Correa Law`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #d54028; color: white; padding: 20px; text-align: center; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .details { background-color: white; padding: 15px; margin: 15px 0; border-left: 4px solid #d54028; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          .button { display: inline-block; padding: 12px 24px; background-color: #d54028; color: white; text-decoration: none; border-radius: 5px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Consultation Request Received</h1>
          </div>
          <div class="content">
            <p>Dear ${data.firstName} ${data.lastName},</p>
            
            <p>Thank you for requesting a consultation with Blanca Correa Law. We have received your request and will contact you within 24 hours to confirm your appointment.</p>
            
            <div class="details">
              <h3>Your Request Details:</h3>
              <p><strong>Consultation Type:</strong> ${data.consultationType}</p>
              <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
              <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
              <p><strong>Case Type:</strong> ${data.caseType}</p>
              ${data.urgency === 'urgent' || data.urgency === 'emergency' ? 
                `<p style="color: #d54028;"><strong>⚠️ Urgency Level:</strong> ${data.urgency.toUpperCase()}</p>` : ''}
            </div>
            
            <p><strong>What happens next?</strong></p>
            <ul>
              <li>We'll review your consultation request</li>
              <li>A team member will contact you to confirm your appointment</li>
              <li>You'll receive a confirmation email with preparation instructions</li>
            </ul>
            
            <p>If you have any questions or need to make changes to your request, please don't hesitate to contact us.</p>
            
            <p style="margin-top: 30px;">
              <strong>Blanca Correa Law</strong><br>
              Phone: (919) 555-1234<br>
              Email: info@blancacorrealaw.com
            </p>
          </div>
          <div class="footer">
            <p>© 2024 Blanca Correa Law. All rights reserved.</p>
            <p>This email was sent because you requested a consultation through our website.</p>
          </div>
        </div>
      </body>
      </html>
    `,
    text: `
Dear ${data.firstName} ${data.lastName},

Thank you for requesting a consultation with Blanca Correa Law. We have received your request and will contact you within 24 hours to confirm your appointment.

Your Request Details:
- Consultation Type: ${data.consultationType}
- Preferred Date: ${data.preferredDate}
- Preferred Time: ${data.preferredTime}
- Case Type: ${data.caseType}

What happens next?
- We'll review your consultation request
- A team member will contact you to confirm your appointment
- You'll receive a confirmation email with preparation instructions

If you have any questions, please contact us at (919) 555-1234 or info@blancacorrealaw.com.

Best regards,
Blanca Correa Law
    `,
  }),

  consultationNotification: (data: any) => ({
    subject: `New Consultation Request - ${data.firstName} ${data.lastName}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #2e5f6a; color: white; padding: 20px; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .details { background-color: white; padding: 15px; margin: 15px 0; border-left: 4px solid #2e5f6a; }
          .urgent { background-color: #fff3cd; border-left-color: #d54028; padding: 15px; margin: 15px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Consultation Request</h2>
          </div>
          <div class="content">
            ${data.urgency === 'urgent' || data.urgency === 'emergency' ? 
              `<div class="urgent">
                <strong>⚠️ ${data.urgency.toUpperCase()} REQUEST</strong>
              </div>` : ''}
            
            <div class="details">
              <h3>Client Information</h3>
              <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Preferred Language:</strong> ${data.language === 'es' ? 'Spanish' : 'English'}</p>
            </div>
            
            <div class="details">
              <h3>Consultation Details</h3>
              <p><strong>Type:</strong> ${data.consultationType}</p>
              <p><strong>Preferred Date:</strong> ${data.preferredDate}</p>
              <p><strong>Preferred Time:</strong> ${data.preferredTime}</p>
              ${data.alternateDate ? `<p><strong>Alternate Date:</strong> ${data.alternateDate}</p>` : ''}
              ${data.alternateTime ? `<p><strong>Alternate Time:</strong> ${data.alternateTime}</p>` : ''}
            </div>
            
            <div class="details">
              <h3>Case Information</h3>
              <p><strong>Case Type:</strong> ${data.caseType}</p>
              <p><strong>Urgency:</strong> ${data.urgency}</p>
              <p><strong>Description:</strong></p>
              <p>${data.description}</p>
              ${data.hearAboutUs ? `<p><strong>How they heard about us:</strong> ${data.hearAboutUs}</p>` : ''}
            </div>
          </div>
        </div>
      </body>
      </html>
    `,
  }),

  contactNotification: (data: any) => ({
    subject: `New Contact Form Submission - ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #2e5f6a; color: white; padding: 20px; }
          .content { padding: 20px; background-color: #f9f9f9; }
          .details { background-color: white; padding: 15px; margin: 15px 0; border-left: 4px solid #2e5f6a; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Contact Form Submission</h2>
          </div>
          <div class="content">
            <div class="details">
              <h3>Contact Information</h3>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
              <p><strong>Preferred Language:</strong> ${data.language === 'es' ? 'Spanish' : 'English'}</p>
            </div>
            
            <div class="details">
              <h3>Message</h3>
              <p><strong>Subject:</strong> ${data.subject}</p>
              <p>${data.message}</p>
            </div>
            
            <p><small>Submitted at: ${new Date().toLocaleString()}</small></p>
          </div>
        </div>
      </body>
      </html>
    `,
  }),
};

export default createEmailTransporter;
