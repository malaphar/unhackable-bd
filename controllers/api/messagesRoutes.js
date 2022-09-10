const router = require('express').Router();
const { Messages } = require('../../models');

// POST to create messages
router.post('/', async (req, res) => {
  await Messages.create({
    message: req.body.message
  }).then(success => res.json({ created: true })).catch(console.error("Error creating new message"))
});

// Get all messages
router.get('/', async (req, res) => {
    if (req.session.logged_in|| !req.session.logged_in) {
        const userMsgData = await Messages.findAll();
        res.send(userMsgData)
      } else {
        res.status(403).json({message: "You must be logged in!"});
      }
})

// Delete Messages
router.delete('/:id', async (req, res, next) => {
  await Messages.destroy({
    where: {
      id: req.params.id
    }
  }).then(success => res.json({deleted: true}))
  .catch(next)
});

module.exports = router;