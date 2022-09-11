const router = require('express').Router();
const path = require('path');

// Base route /user
router.get('/login', async (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/login.html'));
})

// Main dashboard for logged in users 
router.get('/dashboard', async (req, res) => {
  if (req.session.logged_in) {
    res.sendFile(path.join(__dirname, '../../views/dashboard.html'));
  } else {
    res.redirect('/u/login')
  }
})

// Route for mock admin settings
router.get('/admin/settings', async (req, res) => {
  res.sendFile(path.join(__dirname, '../../views/settings.html'));
})


module.exports = router;
