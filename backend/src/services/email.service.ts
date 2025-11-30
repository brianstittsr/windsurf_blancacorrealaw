import { createEmailTransporter, emailTemplates } from '../config/email';
import emailLogModel from '../models/emailLog.model';

const transporter = createEmailTransporter();

// Send consultation confirmation and notification emails
export const sendConsultationEmail = async (data: any): Promise<void> => {
  const fromEmail = process.env.EMAIL_FROM || 'info@blancacorrealaw.com';
  const fromName = process.env.EMAIL_FROM_NAME || 'Blanca Correa Law';
  const attorneyEmail = process.env.ATTORNEY_EMAIL || fromEmail;

  try {
    // Send confirmation email to client
    const clientTemplate = emailTemplates.consultationConfirmation(data);
    const clientEmailInfo = await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: data.email,
      subject: clientTemplate.subject,
      html: clientTemplate.html,
      text: clientTemplate.text,
    });

    // Log client email to Firebase
    await emailLogModel.create({
      emailType: 'consultation_confirmation',
      recipient: data.email,
      subject: clientTemplate.subject,
      status: 'sent',
    });

    console.log('✅ Consultation confirmation email sent:', clientEmailInfo.messageId);

    // Send notification email to attorney
    const attorneyTemplate = emailTemplates.consultationNotification(data);
    const attorneyEmailInfo = await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: attorneyEmail,
      subject: attorneyTemplate.subject,
      html: attorneyTemplate.html,
    });

    // Log attorney email to Firebase
    await emailLogModel.create({
      emailType: 'consultation_notification',
      recipient: attorneyEmail,
      subject: attorneyTemplate.subject,
      status: 'sent',
    });

    console.log('✅ Consultation notification email sent:', attorneyEmailInfo.messageId);
  } catch (error) {
    console.error('❌ Error sending consultation emails:', error);
    
    // Log failed email to Firebase
    await emailLogModel.create({
      emailType: 'consultation_confirmation',
      recipient: data.email,
      subject: 'Consultation Confirmation',
      status: 'failed',
      error: String(error),
    });
    
    throw error;
  }
};

// Send contact form notification to attorney
export const sendContactNotification = async (data: any): Promise<void> => {
  const fromEmail = process.env.EMAIL_FROM || 'info@blancacorrealaw.com';
  const fromName = process.env.EMAIL_FROM_NAME || 'Blanca Correa Law';
  const attorneyEmail = process.env.ATTORNEY_EMAIL || fromEmail;

  try {
    const template = emailTemplates.contactNotification(data);
    const emailInfo = await transporter.sendMail({
      from: `"${fromName}" <${fromEmail}>`,
      to: attorneyEmail,
      replyTo: data.email, // Allow attorney to reply directly
      subject: template.subject,
      html: template.html,
    });

    // Log email to Firebase
    await emailLogModel.create({
      emailType: 'contact_notification',
      recipient: attorneyEmail,
      subject: template.subject,
      status: 'sent',
    });

    console.log('✅ Contact notification email sent:', emailInfo.messageId);
  } catch (error) {
    console.error('❌ Error sending contact notification:', error);
    
    // Log failed email to Firebase
    await emailLogModel.create({
      emailType: 'contact_notification',
      recipient: attorneyEmail,
      subject: 'Contact Form Notification',
      status: 'failed',
      error: String(error),
    });
    
    throw error;
  }
};

export default {
  sendConsultationEmail,
  sendContactNotification,
};
