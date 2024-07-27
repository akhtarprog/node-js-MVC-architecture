let express = require('express')
let app = express()
let userRouter = require('./routers/users.routers')
let adminRouter = require('./routers/admin.routers')
let bodyPerser = require('body-parser')

app.use(bodyPerser.urlencoded({encoded:false}))
app.use(bodyPerser.json())

app.use('/user', userRouter)
app.use('/admin', adminRouter)



app.use('/', (req,res)=>{
    res.sendFile(__dirname+"/index.html")
    res.statusCode = 200
})



app.listen(3000, ()=>{
    console.log('http://localhost:3000');
})
