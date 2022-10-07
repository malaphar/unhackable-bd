const router = require('express').Router();
const path = require('path');
const {Tickers} = require('../models/Tickers');
const sequelize = require('../config/connection');

// Load routes
const apiRoutes = require('./api');
const uiRoutes = require('./ui');


// Routing
router.use('/api', apiRoutes);
router.use('/u', uiRoutes);

// Home page
router.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '../views/index.html'));
});

// Search
router.get('/search', async (req, res) => {
    if (req.query.search) {
        try {
            // SQLi here 
            const sqli = await sequelize.query(`SELECT * FROM tickers WHERE ticker = '${req.query.search}'`)
            console.log(sqli)
            res.send(sqli)
        } catch (error) {
            console.log(error)
            res.send(error.name)
        }
    }
});



// Redirect Handlers
router.get('/login', async (req, res) => {
    res.redirect('/u/login');
})

router.get('/admin', async (req, res) => {
    res.redirect('/u/admin/settings');
})

router.get('/admin/settings', async (req, res) => {
    res.redirect('/u/admin/settings');
})

// No 404s here
router.get('/*', async (req, res) => {
    res.redirect('/');
})


module.exports = router;
