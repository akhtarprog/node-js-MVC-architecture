let users = require('../models/users.model')

let userSave = (req,res)=>{
    res.status(200).json({users})
}

let adminSave = (req,res)=>{
    res.status(200).json({users})
}

module.exports = {userSave, adminSave};