require('dotenv').config()
const express = require('express');
const app = express();
const massive = require('massive');
const {login} = require('./controller');
const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET} = process.env;

app.use(express.json());
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to database');
})

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
})) 


app.post('/auth/login', login)

app.listen(SERVER_PORT, ()=>{
    console.log(`Listening on port ${SERVER_PORT}`);
})