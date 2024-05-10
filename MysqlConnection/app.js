const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost', // MySQL server hostname
  user: 'root', // MySQL username
  password: 'Naseer0786', // MySQL password
  database: 'p1', // MySQL database name
});

// Connect to the database
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL database:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// Execute a SQL query
connection.query('SELECT * FROM student', (err, results,fields) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('Query results:', results);
    // console.log('fields are',fields);
  });
  
  // Close the connection when done
  connection.end();
  
