const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
let getRandomUser=()=> {
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    
    password: faker.internet.password(),
    
  };
}
// console.log(getRandomUser());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'Naseer0786',
    database: 'test',
  });
  let q='INSERT INTO USER (id,username,email,password) VALUES(?,?,?,?)';
  let user=['123','jdnsj','abc@gmail.com','1234'];
  try{
    connection.query(
        q,user,
         (err, results)=> {
            if(err) throw err;
          console.log(results); 
          
           connection.end();
        }
      );
  }
  catch(err){
    console.log(err);
  }
  