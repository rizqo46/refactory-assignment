#!/usr/bin/env node

const { Command } = require('commander');
const mongoose = require('mongoose');
require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
const Session = require('../models/mongoose/session.js');
const program = new Command();



program
.name("refactory-assignment")
.description("Get user login info");

program
.command('get-login-users')
.description("Show all users that currently login")
.alias('glu')
.action(async () => {
    try {
        mongoose.connect(MONGODB_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        Session.find({}).then((currentUser) => {
            if (currentUser.length > 0) {
                console.log("List of login users:");
                currentUser.forEach((item, index)=>{
                    console.log('- ',item.session.email);
                })
                console.log('------------------------');
            } else {
                console.log("Currently there is no user login");
            }
        });
    } catch (error) {
        console.log(error.message);
    }
    
});

program.parse(process.argv);
