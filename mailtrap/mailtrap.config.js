import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// Create a transporter using SMTP
export const transporter = nodemailer.createTransport({
  host: "localhost", 
  port: 1025,
  secure: false,
  auth: null,
});

// Default sender details
export const sender = {
  email: process.env.FROM_EMAIL,
  name: process.env.FROM_NAME,
};
