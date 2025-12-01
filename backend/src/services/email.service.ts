import nodemailer from 'nodemailer';
import emailLogModel from '../models/emailLog.model';

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
};

interface ConsultationEmailData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  language: string;
  consultationType: string;
  preferredDate: string;
  preferredTime: string;
  caseType: string;
  urgency: string;
  description: string;
}

interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  language: string;
  subject: string;
  message: string;
}

export const sendConsultationEmail = async (data: ConsultationEmailData): Promise<void> => {
  const transporter = createTransporter();
  
  const clientSubject = data.language === 'es' 
    ? 'Confirmación de Consulta - Blanca Correa Law'
    : 'Consultation Confirmation - Blanca Correa Law';
  
  const clientMessage = data.language === 'es'
    ? `Estimado/a ${data.firstName} ${data.lastName},\n\nGracias por solicitar una consulta con Blanca Correa Law.\n\nDetalles de su consulta:\n- Tipo: ${data.consultationType}\n- Fecha preferida: ${data.preferredDate} a las ${data.preferredTime}\n- Tipo de caso: ${data.caseType}\n- Urgencia: ${data.urgency}\n\nNos pondremos en contacto con usted pronto para confirmar su cita.\n\nAtentamente,\nBlanca Correa Law`
    : `Dear ${data.firstName} ${data.lastName},\n\nThank you for requesting a consultation with Blanca Correa Law.\n\nYour consultation details:\n- Type: ${data.consultationType}\n- Preferred date: ${data.preferredDate} at ${data.preferredTime}\n- Case type: ${data.caseType}\n- Urgency: ${data.urgency}\n\nWe will contact you soon to confirm your appointment.\n\nBest regards,\nBlanca Correa Law`;

  try {
    // Send confirmation to client
    await transporter.sendMail({
      from: `"Blanca Correa Law" <${process.env.EMAIL_FROM}>`,
      to: data.email,
      subject: clientSubject,
      text: clientMessage,
    });

    await emailLogModel.create({
      emailType: 'consultation_confirmation',
      recipient: data.email,
      subject: clientSubject,
      status: 'sent',
    });

    // Send notification to attorney
    await transporter.sendMail({
      from: `"Website" <${process.env.EMAIL_FROM}>`,
      to: process.env.ATTORNEY_EMAIL || process.env.EMAIL_FROM,
      subject: `New Consultation Request - ${data.urgency.toUpperCase()}`,
      text: `New consultation request:\n\nName: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nPhone: ${data.phone}\nLanguage: ${data.language}\nType: ${data.consultationType}\nDate: ${data.preferredDate} at ${data.preferredTime}\nCase: ${data.caseType}\nUrgency: ${data.urgency}\n\nDescription:\n${data.description}`,
    });

    await emailLogModel.create({
      emailType: 'attorney_notification',
      recipient: process.env.ATTORNEY_EMAIL || process.env.EMAIL_FROM || '',
      subject: `New Consultation Request - ${data.urgency.toUpperCase()}`,
      status: 'sent',
    });

  } catch (error) {
    console.error('Email sending failed:', error);
    await emailLogModel.create({
      emailType: 'consultation_confirmation',
      recipient: data.email,
      subject: clientSubject,
      status: 'failed',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
    throw error;
  }
};

export const sendContactNotification = async (data: ContactEmailData): Promise<void> => {
  const transporter = createTransporter();
  
  try {
    // Send notification to attorney
    await transporter.sendMail({
      from: `"Website" <${process.env.EMAIL_FROM}>`,
      to: process.env.ATTORNEY_EMAIL || process.env.EMAIL_FROM,
      subject: `New Contact Form: ${data.subject}`,
      text: `New contact form submission:\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nLanguage: ${data.language}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`,
      replyTo: data.email,
    });

    await emailLogModel.create({
      emailType: 'contact_notification',
      recipient: process.env.ATTORNEY_EMAIL || process.env.EMAIL_FROM || '',
      subject: `New Contact Form: ${data.subject}`,
      status: 'sent',
    });

  } catch (error) {
    console.error('Email sending failed:', error);
    await emailLogModel.create({
      emailType: 'contact_notification',
      recipient: process.env.ATTORNEY_EMAIL || process.env.EMAIL_FROM || '',
      subject: `New Contact Form: ${data.subject}`,
      status: 'failed',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
    throw error;
  }
};
