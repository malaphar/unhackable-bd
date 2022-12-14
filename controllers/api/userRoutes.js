const router = require('express').Router();
const { User } = require('../../models');

// /api/users/ -- base route 
// AUTHN 
router.post('/login', async (req, res) => {
  try {
    // find user by email 
    const userData = await User.findOne({ where: { name: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Checks Db for pass 
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      // Vuln code returns all user data incl pass
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(400).json(err);
  }
});


router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// User Info
router.get('/userId', (req, res) => {
  if (req.session.logged_in) {
    res.json({user_id: req.session.user_id})
  } else {
    res.status(404).end();
  }
})

module.exports = router;
