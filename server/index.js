require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;

const app = express();

app.use(express.json());
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 30
        },
    })
);

massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
})
.then(dbInstance => {
    app.set('db', dbInstance);
    console.log(`Connection Successful - Don't forget your towel`)
})
.catch(err => console.log(err));

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));