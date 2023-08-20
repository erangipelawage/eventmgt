const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'eventmgt.cfvufltihmhv.us-east-2.rds.amazonaws.com',
  user: 'admin',
  password: 'Pa$$w0rd',
  database: 'eventmgt', 
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  db.query('SELECT * FROM customer_customer WHERE name = ?', [name], (err, results) => {
    if (err) throw err;

    if (results.length > 0) {
      const user = results[0];
      bcrypt.compare(password, user.password, (bcryptErr, bcryptResult) => {
        if (bcryptErr) throw bcryptErr;

        if (bcryptResult) {
          const token = jwt.sign({ userId: user.id }, 'secret_key');
          res.json({ token });
        } else {
          res.status(401).json({ message: 'Invalid credentials' });
        }
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  });
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});