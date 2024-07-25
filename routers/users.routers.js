let express = require('express')
let router = express.Router()


router.get('/login', (req, res)=>{
    res.send('this is login page')
})

router.get('/registar', (req, res)=>{
    res.send('this is registar page')
})


module.exports = router;