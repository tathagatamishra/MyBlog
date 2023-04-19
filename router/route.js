const express = require('express')
const router = express.Router()

const {createUser} = require('../controller/userCtrl')


router.get('/test', (req, res) => {
    let data = "😍"
    res.send({data: data})
}) 


router.post('/create_account', createUser)


module.exports = router