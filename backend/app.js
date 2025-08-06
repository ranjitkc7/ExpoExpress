const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const db = require("./models/db"); 

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello from the backend");
});

app.post("/signUp", (req, res) => {
  const { username, email, password } = req.body;

  const sql = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;

  db.query(sql, [username, email, password], (err, result) => {
    if (err) {
      console.error("MySQL Error:", err);

      if (err.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ message: "Email already exists" });
      }

      return res.status(500).json({ message: "Database error" });
    }

    console.log("✅ New user registered:", username, email);
    res.status(201).json({ message: "User created successfully" });
  });
});

app.post("/logIn", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;

  db.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error("MySQL Error:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (results.length > 0) {
      return res
        .status(200)
        .json({ message: "Login successful", user: results[0] });
    } else {
      return res.status(401).json({ message: "Invalid credentials" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
