const express = require('express');
const { registerController, loginConroller, currentUserController } = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router()

// routes

// register || POST
router.post('/register',registerController)

// Login || POST
router.post('/login',loginConroller)

//Get Current user || GET
router.get('/current-user',authMiddleware,currentUserController)

module.exports = router
