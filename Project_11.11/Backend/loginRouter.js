// loginRouter.js
const express = require('express');
const router = express.Router();

// Prisijungimo puslapio parodymas
router.get('/', (req, res) => {
  res.send('Prisijungimo puslapis');
});

// Prisijungimo logika
router.post('/', (req, res) => {
  // Čia prisijungimo patikrinimo logiką

  // Pvz., tikriname, ar pateikti duomenys atitinka kokius nors duomenis duomenų bazėje
  const { email, password } = req.body;
  if (email === 'test@test.com' && password === 'slaptazodis') {
    // Įprastai, jei prisijungimas sėkmingas, galime nukreipti į pagrindinį puslapį
    res.redirect('/');
  } else {
    // Jei prisijungimas nesėkmingas, galime parodyti klaidų pranešimą
    res.send('Neteisingi prisijungimo duomenys');
  }
});

module.exports = router;
