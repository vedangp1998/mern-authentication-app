const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

const verifyMail = (token, email) => {
  const emailTemplateSource = fs.readFileSync(
    path.join(__dirname, "template.hbs"),
    "utf-8",
  );
  const template = handlebars.compile(emailTemplateSource);
  const htmlToSend = template({ token: encodeURIComponent(token) });

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
    html: htmlToSend,
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
