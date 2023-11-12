const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const { comparePassword } = require('./password_manager');
const pool = require('./database');

router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.json({ message: 'Both email and password are required.' });
  }

  const sql = 'SELECT * FROM users WHERE email = ?';
  
  pool.query(sql, [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }

    if (results.length === 0) {
      return res.json({ message: 'User not found.' });
    }

    const user = results[0];

    comparePassword(password, user.password, (bcryptErr, bcryptResult) => {
      if (bcryptErr) {
        console.error('Bcrypt error:', bcryptErr);
        return res.status(500).json({ message: 'Internal Server Error' });
      }

      if (bcryptResult) {
        return res.json({ message: 'Login successful.' });
      } else {
        return res.json({ message: 'Incorrect email or password.' });
      }
    });
  });
});

module.exports = router;
