const router = require('express').Router();
const authController = require('../controllers/auth');
const passport = require('passport');

router.get('/', authController.homePage);
router.get('/logout', authController.logout);
router.get('/google-auth', authController.googleMiddleware, passport.authenticate('google', {
    scope: ['profile', 'email']
}));
router.get('/google-auth/auth', 
	passport.authenticate('google'), 
	authController.googleAuth);

module.exports = router;