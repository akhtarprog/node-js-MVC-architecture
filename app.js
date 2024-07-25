let express = require('express')
let app = express()
let userRouter = require('./routers/users.routers')
let adminRouter = require('./routers/admin.routers')

app.use('/user', userRouter)
app.use('/admin', adminRouter)

app.use('/', (req,res)=>{
    res.send("<h1>This is a defult Home page</h1>")
    res.end()
})

app.listen(3000, ()=>{
    console.log('http://localhost:3000');
})