const {OAuth2Client} = require('google-auth-library');
const User = require('../models/mongoose/user.js');
require('dotenv').config();
const CLIENT_ID = process.env.GOOGLE_CLIENTID
const client = new OAuth2Client(CLIENT_ID);

const homePage = (req, res) => {
    
	if (req.session.isAuth) {
        res.render('auth', {
            path: '/logout',
            text: "You already logged in click button bellow to logout",
            buttonText: "Logout"
        });
    } else {
        res.render('auth', {
            path: '/google-auth',
            text: "Click the button bellow to login/register with google",
            buttonText: "Register/Login with Google"
        });
    }
}

const googleMiddleware = (req, res, next) => {
    if (req.session.isAuth) {
        res.redirect('/')
    } else {
        next()
    }
}

const googleAuth = async (req, res) => {
    try {
        const token = req.user;
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        
        User.findOne({email: payload['email']}).then((currentUser) => {
            if(currentUser){
                currentUser.lastLogin = Date.now();
                currentUser.save();
                req.session.isAuth = true;
                req.session.email = currentUser.email;
                req.session.cookie.maxAge = 60*1000;
                res.json(currentUser)
            } else {
                new User({
                    name: payload['name'],
                    email: payload['email']
                }).save().then((newUser) => {
                    req.session.isAuth = true;
                    req.session.email = currentUser.email;
                    req.session.cookie.maxAge = 60*1000;
                    res.json(newUser);
                });
            }
        });

    } catch (err) {
        console.log(err.message);
        req.session.error = "Invalid Credentials";
        res.status(401).json({error: {message: err.message}});
    }
}

const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) throw err;
        res.redirect("/");
      });
}

module.exports = {googleAuth, googleMiddleware, homePage, logout}