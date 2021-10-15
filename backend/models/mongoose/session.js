const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    expires: { type: Date },
    session: {
      cookie: {
          originalMaxAge: {type: Number},
          expires: {type: Date},
          secure: {type: Boolean},
          httpOnly: {type: Boolean},
          domain: {type: String},
          path: {type: String},
          sameSite: {type: Boolean}
      },
      passport: {
          user: {type: String}
      },
      isAuth: {type: Boolean},
      email: {type: String}
    }
  }, { collection: 'sessions' });

  const Session = mongoose.model('User', sessionSchema);
  module.exports = Session;