const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const verifyMail = (token, email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailConfig = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Email Verification",
    html: `<h1>Email Verification</h1>`,
  };

  transporter.sendMail(mailConfig, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
    } else {
      console.log("Email sent:", info.messageId);
    }
  });
};

module.exports = { verifyMail };
