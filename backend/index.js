const express = require('express');
const path = require('path');
const logger = require('morgan');
const passportSetup = require('./configs/passport');
const passport = require('passport');
const mongoSanitize = require('express-mongo-sanitize');
const mongoose = require('mongoose');
const authRouter = require('./routers/auth');
require('dotenv').config();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// prevent nosql injection
app.use(mongoSanitize({
    onSanitize: ({ req, key }) => {
      console.warn(`This request[${key}] is sanitized`);
}}));
app.use(authRouter);

try {
    mongoose.connect(MONGODB_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log('Connection has been established successfully.');
    app.listen(PORT, (err) => {
        if (err) {
            return console.log('something bad happened', err)
        }
        console.log(`server is listening on ${PORT}`)
    });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}