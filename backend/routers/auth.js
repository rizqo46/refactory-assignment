const router = require('express').Router();
const authController = require('../controllers/auth');
const passport = require('passport');

router.get('/google-auth', passport.authenticate('google', {
    scope: ['profile', 'email']
}));
router.get('/google-auth/auth', 
	passport.authenticate('google'), 
	authController.googleAuth);

module.exports = router;