const router = require('express').Router();
const userRoutes = require('./userRoutes');
const tradeRoutes = require('./tradeRoutes');
const settingsRoutes = require('./settingsRoutes');
const messagesRoutes = require('./messagesRoutes');

router.use('/users', userRoutes);
router.use('/trades', tradeRoutes);
router.use('/settings', settingsRoutes);
router.use('/messages', messagesRoutes);

module.exports = router;
