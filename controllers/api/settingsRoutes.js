const router = require('express').Router();
const {Settings} = require('../../models');

// Function to query Db for "admin settings"
getAll = async () => {
    const adminSettings = await Settings.findAll({
        where: {
            id: 1
        }
    })
    if (adminSettings) {
        return adminSettings
    } else {
        return false
    }
}

// GET /api/settings (just a url rn)
router.get('/', async (req, res) => {
    const authURL = await getAll()
    if (authURL) {
        res.send(authURL)
    }

})

// Update Settings for SSRF Example
router.put('/', async (req, res) => {
    Settings.update(req.body, {
        where: {
            id: 1
        }
    }).then(async data => {
        const auth_URL = await getAll()
        res.send(auth_URL)
    })
})

module.exports = router;
