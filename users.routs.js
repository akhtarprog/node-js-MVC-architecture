let express = require("express")
let routs = express.Router()

routs.get('/', (req, res)=>{
    res.send('This is a home page')
    res.end()
})

routs.get('/about', (req, res)=>{
    res.send('This is a about page')
    res.end()
})
routs.get('/contact', (req, res)=>{
    res.send('This is a contact page')
    res.end()
})

module.exports = routs