let express = require("express")
let app = express()
let routs = require('./users.routs')

app.use(routs)


app.listen(3000, ()=>{
    console.log("http://localhost:3000");
})