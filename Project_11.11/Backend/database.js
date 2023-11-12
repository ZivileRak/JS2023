const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10, // maksimalus prisijungimų skaičius
  host: 'localhost',
  user: 'test@test.com',
  password: '$2b$10$Nt7O9wqN0oGO/XXsyGmFt.DcjMOT5b0VdEGWl3VoFGBwmsxuPt.NW',
  database: 'web_store',
  multipleStatements: true,
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Unable to connect to the database:', err);
  } else {
    console.log('Connected to the database');
    connection.release();
  }
});

module.exports = pool;
