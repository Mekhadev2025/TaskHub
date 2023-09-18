const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

app.use(express.json());
app.use(cors());

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'mekha',
  password: 'mekha1234',
  database: 'TASKS',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

connection.query("CREATE TABLE IF NOT EXISTS tasks (taskname VARCHAR(255),id INT AUTO_INCREMENT PRIMARY KEY);", (error, results, fields) => {
  if (error) {
    console.error('Error querying the database:', error);
    return;
  }
  console.log('Query results:', results);
});

app.post("/add", (req, res) => {
  const taskName = req.body.taskName; // Use req.body to access POST request data
    
  connection.query("INSERT INTO tasks (taskname) VALUES (?)", [taskName], (error, results, fields) => {
    if (error) {
      console.error('Error querying the database:', error);
      return;
    }
    // Handle the query results here
    console.log('Query results:', results);
  });
});

app.get("/add", (req, res) => {
  res.send("userssssss");
});

app.get("/", (req, res) => {
  console.log("Done sending get to home");
  res.send("HELLOOOOO");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Running Successfully on Port Number ${PORT}`);
});