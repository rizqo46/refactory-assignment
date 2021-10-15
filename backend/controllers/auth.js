const {OAuth2Client} = require('google-auth-library');
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
        console.log(payload);
        res.send(payload['email']);

    } catch (err) {
        console.log(err.message);
        res.status(401).send(err.message);
    }
}

module.exports = {googleAuth}