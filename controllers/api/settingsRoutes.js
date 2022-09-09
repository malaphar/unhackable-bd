const router = require('express').Router();
const { Settings } = require('../../models');

// GET settings (just a url)
router.get('/', async (req,res)=> {
  const adminSettings = Settings.findAll({where: {id: 1}})
  if(adminSettings) {
    res.send(adminSettings)
  } else {
    res.status(404).end()
  }
})

// Update Settings for SSRF Example
router.put('/', async (req, res) => {
// TO DO
})

module.exports = router;