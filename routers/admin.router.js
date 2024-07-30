let router = require('express').Router()
const { adminSave } = require('../controllers/users.controller');

router.get('/', adminSave)



module.exports = router;