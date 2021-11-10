require('dotenv').config();
const massive = require('massive');
const express = require('express');
const session = require('express-session');

// Controllers
const { getMovie, getPreview } = require('./controllers/movie');
const {
    register,
    login,
    logout,
    getUser
} = require('./controllers/auth')
const { 
    addTitle,
    removeTitle,
    getList,
    getStats,
} = require('./controllers/watchlist');
const {
    createReview,
    getReview,
    deleteReview,
} = require('./controllers/review');

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;

const app = express();

app.use(express.json());
app.use(
    session({
        resave: false,
        saveUninitialized: false,
        secret: SESSION_SECRET,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24  
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

// Watchlist Endpoints
app.get('/api/watchlist/:id', getList);
app.post('/api/watchlist/add/:id', addTitle);
app.delete('/api/watchlist/delete/:id/:title', removeTitle);
app.get('/api/stats/', getStats);

// Review Endpoints
app.get('/api/review/:id/:userid', getReview);
app.post('/api/review/add/:id', createReview);
app.delete('/api/review/delete/:id/:userid', deleteReview);

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));