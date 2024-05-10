const express = require("express");
const mysql = require("mysql2/promise"); // Use 'mysql2/promise' for promise-based API

const app = express();
const PORT = 3000;
const path = require("path");

// MySQL connection
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Naseer0786',
    database: 'node',
});

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


// Routes
app.post("/register", async (req, res) => {
    let { username, password } = req.body;
    console.log(req.body);
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query(
            'INSERT INTO users (username, password) VALUES (?, ?)',
            [username, password]
        );
        connection.release();
        res.render("welcome.ejs", { username });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
});

app.post("/login", async (req, res) => {
    let { username, password } = req.body;
    try {
        const connection = await pool.getConnection();
        const [rows] = await connection.query(
            'SELECT * FROM users WHERE username = ? AND password = ?',
            [username, password]
        );
        connection.release();
        if (rows.length > 0) {
            res.send('Login successful'); // or redirect to a welcome page
        } else {
            res.status(401).send('Invalid credentials');
        }
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Server error');
    }
});
app.get("/login", (req, res) => {
    res.render("login.ejs");
});
app.get("/register", (req, res) => {
    console.log("req received");
    res.render("index.ejs");
});

app.get("/register/new", (req, res) => {
    res.render("register.ejs");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
