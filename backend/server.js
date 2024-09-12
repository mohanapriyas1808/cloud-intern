const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create MySQL connection
const db = mysql.createConnection({
  host: "mysql",
  user: "root",             
  password: "rootpassword",  
  database: "school_db"      // Changed database name to 'school_db'
});

// Connect to MySQL with retry logic
function handleDisconnect() {
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      setTimeout(handleDisconnect, 2000); // Retry after 2 seconds
    } else {
      console.log("Connected to MySQL");
    }
  });

  db.on('error', (err) => {
    console.error('MySQL error:', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect(); // Reconnect if connection is lost
    } else {
      throw err;
    }
  });
}

handleDisconnect();

// API endpoint to handle student data submission
app.post("/api/students", (req, res) => {
  const { name, subject, marks } = req.body;
  
  // Change table name from 'students' to 'student_marks'
  const query = "INSERT INTO student_marks (name, subject, marks) VALUES (?, ?, ?)";

  db.query(query, [name, subject, marks], (err, result) => {
    if (err) {
      console.error("Failed to insert data:", err);
      return res.status(500).send("Failed to save student data");
    }
    res.status(201).send("Student data saved");
  });
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
