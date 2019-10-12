require('dotenv').config()
const express = require('express');
const app = express();
const massive = require('massive');
const {} = require('./controller');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(express.json());
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to database');
})

app.listen(SERVER_PORT, ()=>{
    console.log(`Listening on port ${SERVER_PORT}`);
})