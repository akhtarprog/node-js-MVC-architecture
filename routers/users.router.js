let router = require('express').Router()
const { userSave } = require('../controllers/users.controller');

router.get('/', userSave)



module.exports = router;