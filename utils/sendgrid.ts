import sgMail from "@sendgrid/mail";

const ADMIN_EMAIL = "ianbenedictona@gmail.com";
export const sendEmail = async (subject: string, text: string) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? "");

  const msg = {
    to: ADMIN_EMAIL,
    from: ADMIN_EMAIL,
    subject,
    text,
  };

  try {
    await sgMail.send(msg);
    console.log("Email sent");
  } catch (error) {
    console.error(error);
  }
};
