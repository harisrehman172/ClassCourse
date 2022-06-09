const express = require('express');
const { users

} = require('../controllers/admin/usersController');
const router = express.Router();

// Route for get method
router.get('/admin/users', users)

module.exports = router;