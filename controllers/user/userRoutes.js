const router = require('express').Router();
const path = require('path');

// Base route /user
router.get('/login', async (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/login.html'));
})

router.get('/trades', async (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/trades.html'));
})

module.exports = router;
