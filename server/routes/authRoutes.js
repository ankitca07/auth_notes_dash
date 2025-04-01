const express = require('express');
const { signupUser, loginUser, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile); // Example protected route

module.exports = router;