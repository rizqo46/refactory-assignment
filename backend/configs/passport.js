const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
require('dotenv').config();

passport.serializeUser((id_token, done) => {
    done(null, id_token);
});

passport.deserializeUser((id_token, done) => {
    done(null, id_token);
    
});

passport.use(
    new GoogleStrategy({
        // options for google strategy
        callbackURL: '/google-auth/auth',
        clientID: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }, (accessToken, refreshToken, X ,profile, done) => {
        done(null, X.id_token);
    })
);