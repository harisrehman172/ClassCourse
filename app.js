const express = require('express');
const env = require('dotenv').config();
const admin = require('./routes/admin')
const passport = require('passport'),
        fileUpload        = require('express-fileupload'),
        path              = require('path'),
        session           = require('express-session'),
        flash             = require('express-flash'),
        LocalStrategy     = require("passport-local").Strategy,
        cookieParser      = require('cookie-parser'),
        cors              = require('cors');
const app = express();
PORT = process.env.port

    
const { SESSION_SECRET }  =  process.env;

app.use(cors());
app.options('*', cors());

// Express session
app.use(session({
    secret: SESSION_SECRET, 
    resave: true, 
    saveUninitialized: true,
    cookie  : { maxAge  : 24 * 60 * 60 * 1000 } 
 }));

 app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Static Files
app.use(express.static('public'));
app.use(express.static(__dirname + '/static'));

app.use('/uploads', express.static(__dirname + '/uploads'));
app.use(fileUpload()); // configure fileupload

// Using express  for json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(admin);

// Server Listening
app.listen(PORT, () => {
    console.log(`App is Running On http://localhost:${PORT}`)
})