let express = require('express')
let router = express.Router()


router.get('/login', (req, res)=>{
    res.send('this is your login page')
})

router.get('/registar', (req, res)=>{
    res.sendFile(__dirname + "/user.html")
})

router.post('/registar', (req, res)=>{
    let fullName = req.body.fullName;
    let age = req.body.age;
    res.send(`Your full name ${fullName} and your age ${age}`)
})


module.exports = router;