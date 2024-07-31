require('dotenv').config()
let app = require('./app')
let PORT = process.env.PORT || 3000


app.listen(PORT, ()=>{
    console.log(`server is successfuly running http://localhost:${PORT}`);
})
