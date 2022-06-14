const express = require('express');
const users = require('../controllers/admin/usersController');
const indexController = require("../controllers/admin/indexController");
const router = express.Router();

/* GET - Public - Show admin log in page */
router.get('/', indexController.login_get);

// Route for get method
// router.get('/admin/users', users)

module.exports = router;