const router = require('express').Router();
const {Messages} = require('../../models');

// POST to create messages
router.post('/', async (req, res) => {
    try {
        await Messages.create({message: req.body.message}).then(success => res.json({created: true})).catch(console.error("Error creating new message"))
    } catch (error) {
        console.log(`Failure to add message: ${error}`)
    }
});

// Get all messages
router.get('/', async (req, res) => {
    if (req.session.logged_in || !req.session.logged_in) {
        const userMsgData = await Messages.findAll();
        res.send(userMsgData)
    } else {
        res.status(403).json({message: "You must be logged in!"});
    }
})

// Delete Messages
router.delete('/:id', async (req, res, next) => {
    try {
        await Messages.destroy({
            where: {
                id: req.params.id
            }
        }).then(success => res.json({deleted: true})).catch(next)
    } catch(error) {
        console.log(error)
    }
});

module.exports = router;
