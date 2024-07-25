let express = require('express');
let router = express.Router()

router.get('/login', (req, res)=>{
    res.send('This is a admin login page')
})
router.get('/registar', (req, res)=>{
    res.send('This is a admin registar page')
})


module.exports = router;