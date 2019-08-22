'use strict';

const mysql = require('mysql');
const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'burrito',
  database: 'employees'
});
con.connect(err => {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});
// con.query('SELECT * from employees', (err, rows) => {
//     if (err) {
//         throw err
//     }
//     console.log('Data received from Db:\n');
//     console.log(rows);
// })

con.end();
