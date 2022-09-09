const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tradeRoutes = require('./tradeRoutes');
const settingsRoutes = require('./settingsRoutes');

router.use('/users', userRoutes);
router.use('/trades', tradeRoutes);
router.use('/settings', settingsRoutes);

module.exports = router;
