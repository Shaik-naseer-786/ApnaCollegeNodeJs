const express = require("express");
const mysql = require("mysql2");

const app = express();
const PORT =  3000;
const path=require("path");
// MySQL connection
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Naseer0786',
  database: 'node',
  connectionLimit: 10,
});

// Middleware
app.use(express.urlencoded({extended:true}));
app.set("views engine","ejs");
app.use(express.json);
app.set("views",path.join(__dirname,"views"))
app.use(express.static(path.join(__dirname,"public")));; // Serve static files from the 'public' directory

// Routes
app.post("/register", async (req, res) => {
    let { username, password } = req.body;
    console.log(req.body);
    try {
      const connection = await pool.getConnection(); // Wait for connection to be acquired
      const [rows] = await connection.query(
        'INSERT INTO users (username, password) VALUES (?, ?)',
        [username, password]
      );
      connection.release();
      res.status(200).send('User registered successfully');
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Server error');
    }
  });

app.get("/register",(req,res)=>{
  // res.send("request recived");
  console.log("req received");
  res.render("index.ejs");
})
app.get("/register/new",(req,res)=>{
  res.render("register.ejs");
})
// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
