let express = require("express")
let app = express()

app.get('/', (req, res)=>{
    res.send('This is a home page')
    res.end()
})

app.get('/about', (req, res)=>{
    res.send('This is a about page')
    res.end()
})
app.get('/contact', (req, res)=>{
    res.send('This is a contact page')
    res.end()
})

app.listen(3000, ()=>{
    console.log("http://localhost:3000");
})