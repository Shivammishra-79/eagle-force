require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 🔹 CONTACT FORM ROUTE
app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  // simple validation
  if (!name || !email || !phone || !message)
    return res.status(400).json({ error: "All fields are required." });

  try {
    // setup transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,       // example: sam7317892429@gmail.com
        pass: process.env.EMAIL_PASS,       // app password
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Enquiry from ${name}`,
      text: `
        Name: ${name}
        Phone: ${phone}
        Email: ${email}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ error: "Failed to send email." });
  }
});

// 🔹 TEST ROUTE
app.get("/", (req, res) => {
  res.send("Eagle Force Email Server Running");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));