const router = require('express').Router();
const path = require('path');

// Load routes
const apiRoutes = require('./api');
const userRoutes = require('./user');

// Routing
router.use('/api', apiRoutes);
router.use('/user', userRoutes);

// Home page
router.get('/', async (req, res) => {
    if (!req.session.logged_in) {
        res.redirect('/user/login');
      } else {
        res.sendFile(path.join(__dirname, '../views/index.html'));
      }
  });

module.exports = router;
