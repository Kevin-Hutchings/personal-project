require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');
const { getPreview } = require('./controllers/preview');
const { getMovie } = require('./controllers/movie');
const {
    register,
    login,
    logout,
    getUser
} = require('./controllers/auth')

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

// Movie Endpoints
app.get('/api/movies/', getPreview);
app.get('/api/movie/:id', getMovie);

// User Auth Endpoints
app.post('/api/auth/register', register);
app.post('/api/auth/login', login);
app.get('/api/auth/me', getUser);
app.post('/api/auth/logout', logout);

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));