const express = require ('express');
const  adminController = require ('../controller/admin')


const router = express.Router();

router.post('/',
adminController.signUpAdminController
)


module.exports = router