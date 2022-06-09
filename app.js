const express = require('express');
const env = require('dotenv').config();
const admin = require('./routes/admin')

const app = express();
PORT = process.env.port

// Using express  for json data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(admin);

// Server Listening
app.listen(PORT, () => {
    console.log(`App is Running On http://localhost:${PORT}`)
})