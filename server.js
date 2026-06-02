const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { first_name, last_name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "ebtsamomr72@gmail.com",
      pass: "nyix sjfk bfty mdbs",
    },
  });

  await transporter.sendMail({
    from: email,
    to: "Yebtsamomr72@gmail.com",
    subject: "New Contact Form Message",
    text: `
Name: ${first_name} ${last_name}
Email: ${email}
Message: ${message}
    `,
  });

  res.send("Email sent");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log("Server running on port " + PORT));