import express from "express";
import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// ----------------------
// MySQL Connection
// ----------------------
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database!");
  }
});

// ----------------------
// Routes
// ----------------------

// Get all jobs
app.get("/jobs", (req, res) => {
  db.query("SELECT * FROM Jobs", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
});

// Add a new job
app.post("/jobs", (req, res) => {
  const { job_title, organization, requirements } = req.body;
  if (!job_title || !organization || !requirements) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO Jobs (job_title, organization, requirements) VALUES (?, ?, ?)";
  db.query(sql, [job_title, organization, requirements], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Job added successfully!", job_id: result.insertId });
  });
});

// Update a job
app.put("/jobs/:id", (req, res) => {
  const { job_title, organization, requirements } = req.body;
  const jobId = req.params.id;

  if (!job_title || !organization || !requirements) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "UPDATE Jobs SET job_title = ?, organization = ?, requirements = ? WHERE job_id = ?";
  db.query(sql, [job_title, organization, requirements, jobId], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Job updated successfully!" });
  });
});

// Delete a job
app.delete("/jobs/:id", (req, res) => {
  const sql = "DELETE FROM Jobs WHERE job_id = ?";
  db.query(sql, [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Job deleted successfully!" });
  });
});

// ----------------------
// Start Server
// ----------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
