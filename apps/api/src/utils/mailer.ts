import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function sendMail(
  to: string,
  subject: string,
  text: string
) {
  await transporter.sendMail({
    from: `"Turnos" <${process.env.MAIL_USER}>`,
    to,
    subject,
    text,
  });
}
