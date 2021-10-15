const {OAuth2Client} = require('google-auth-library');
const User = require('../models/mongoose/user.js');
require('dotenv').config();
const CLIENT_ID = process.env.GOOGLE_CLIENTID
const client = new OAuth2Client(CLIENT_ID);

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
                res.json(currentUser)
            } else {
                new User({
                    name: payload['name'],
                    email: payload['email']
                }).save().then((newUser) => {
                    res.json(newUser);
                });
            }
        });

    } catch (err) {
        console.log(err.message);
        res.status(401).json({error: {message: err.message}});
    }
}

module.exports = {googleAuth}