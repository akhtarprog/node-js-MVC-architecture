let express = require('express')
let app = express()
let userRouter = require('./routers/users.router')
let adminRouter = require('./routers/admin.router')



app.use('/user', userRouter)
app.use('/admin', adminRouter)


//defult home route
app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/views/index.html")
})

//invilade route
app.use((req,res,next)=>{
    res.status(404)
    res.send('This route is not found 404')
})

//server error
app.use((err, req, res, next)=>{
    res.status(505)
    res.send('This server is problem 505')
})

module.exports = app;