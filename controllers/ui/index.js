const router = require('express').Router();
const uiRoutes = require('./uiRoutes');

router.use('/', uiRoutes);

module.exports = router;
