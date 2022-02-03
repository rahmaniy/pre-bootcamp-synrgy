const express = require("express")
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hello World!')
})
router.get('/test', (req, res) => {
    res.send('Ini test!')
})
router.post('/', (req, res) => {
    res.send('ini method post')
})

module.exports = router