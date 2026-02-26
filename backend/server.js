require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
// Render automatically PORT assign karta hai, isliye process.env.PORT priority hai
const PORT = process.env.PORT || 5000;

// 🔹 UPDATED CORS CONFIGURATION
// Maine "*" (All origins) isliye kiya hai taaki CORS ka jhamela 100% khatam ho jaye
app.use(cors({
  origin: "*", 
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// 🔹 CONTACT FORM ROUTE
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;
  console.log("📩 Incoming Request Data:", req.body);

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Opps! Saari details bhariye." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // 16-digit app password
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Aapko isi email par enquiry aayegi
      replyTo: email,
      subject: `🔥 New Eagle Force Enquiry: ${name}`,
      text: `
        You have a new contact form submission:
        ------------------------------------
        Name:    ${name}
        Phone:   ${phone}
        Email:   ${email}
        Message: ${message}
        ------------------------------------
      `,
    };

    // Verify transporter connection before sending
    await transporter.verify();
    
    await transporter.sendMail(mailOptions);
    console.log("✅ SUCCESS: Email sent to", process.env.EMAIL_USER);
    
    res.status(200).json({ success: true, message: "Success! We will contact you soon." });

  } catch (err) {
    console.error("❌ SERVER ERROR DETAILS:", err.message);
    res.status(500).json({ 
      error: "Server Error", 
      details: err.message,
      hint: "Check if EMAIL_USER and EMAIL_PASS are set in Render Environment Variables"
    });
  }
});

// 🔹 HEALTH CHECK ROUTE
app.get("/", (req, res) => res.send("Eagle Force API is Running Smoothly! 🚀"));

// 🔹 START SERVER
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});