import express from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "bsp",
  port: process.env.DB_PORT || 3306,
});

db.connect((err) => {
  if (err) {
    console.log("❌ Database connection failed:", err);
  } else {
    console.log("✅ Database connected successfully!");
  }
});

// ------------------------------
//   REGISTER API
// ------------------------------
app.post("/register", (req, res) => {
  const { name, email, password, university, department, cgpa } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send({ message: "Required fields missing!" });
  }

  const sql = `
        INSERT INTO Users 
        (name, email, password, university, department, cgpa) 
        VALUES (?, ?, ?, ?, ?, ?)
    `;

  db.query(
    sql,
    [name, email, password, university, department, cgpa],
    (err, result) => {
      if (err) {
        console.log("❌ Registration Error:", err);
        return res.status(500).send({ message: "Registration failed!" });
      }
      res.send({ message: "User registered successfully!" });
    }
  );
});

// ------------------------------
//   ROOT TEST API
// ------------------------------
app.get("/", (req, res) => {
  res.send("Backend running ✔️");
});

// ------------------------------
//   START SERVER
// ------------------------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
