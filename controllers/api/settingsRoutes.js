const router = require('express').Router();
const fetch = require('node-fetch');
const {Settings} = require('../../models');

// Function to query Db for "admin settings"
getAll = async () => {
    const adminSettings = await Settings.findAll({
        attributes: {exclude: ['admin_pass']},
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

// Route to handle "Test Connection" aka SSRF route
router.post('/test', async (req, res) => {
    const url = req.body.url
    const adminUsername = req.body.userName
    const adminPassQuery = await Settings.findAll({
        where: {
            id: 1
        }
    })
    const adminPass = adminPassQuery[0].dataValues.admin_pass
    try {
        const r = await fetch(url, {credentials:'include', method:'POST', body: `username=${adminUsername}&password=${adminPass}`}).then(response => response.text())
        res.send(r)
        return
    }
    catch (error){
        if (error.name === 'AbortError') {
			console.log('request was aborted');
		} else if  (error.name === 'FetchError') {
			console.log('FetchError: Connection was not made or no response');
		} else {
            console.log(`Failure to Fetch: ${error.name}`);
        }
        res.send(error)
    }
    res.send()
    return
})

module.exports = router;
