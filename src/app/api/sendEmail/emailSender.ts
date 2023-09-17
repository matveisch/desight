import nodemailer from 'nodemailer';

type EmailPayload = {
  from: string;
  to: string;
  subject: string;
  text: string;
};

// Replace with your SMTP credentials
const smtpOptions = {
  host: process.env.SMTP_HOST || '',
  secure: true,
  secureConnection: false,
  tls: {
    ciphers: 'SSLv3',
  },
  requireTLS: true,
  port: parseInt(process.env.SMTP_PORT || ''),
  debug: true,
  auth: {
    user: process.env.SMTP_USER || '',
    pass: process.env.SMTP_PASSWORD || '',
  },
};

export const sendEmail = async (data: EmailPayload) => {
  const transporter = nodemailer.createTransport(smtpOptions);
  return await transporter.sendMail({
    ...data,
  });
};
