const router = require('express').Router();
const { Trades } = require('../../models');

// Get trades by user Id -- IDOR example 
router.get('/:id', async (req, res) => {
    if (req.session.logged_in) {
        const userTradeData = await Trades.findAll({ where: { user_id: req.params.id } });
        res.send(userTradeData)
      } else {
        res.status(403).json({message: "You must be logged in!"});
      }
})

module.exports = router;