require("dotenv").config();
const massive = require("massive");
const express = require("express");
const session = require("express-session");
const port = process.env.PORT || 4242;
const { CONNECTION_STRING, SESSION_SECRET, DATABASE_URL } = process.env;

// Controllers
const { getMovie, getPreview, getRatings } = require("./controllers/movie");
const {
  register,
  login,
  logout,
  getUser,
  deleteUser,
  updateEmail,
} = require("./controllers/auth");
const {
  addTitle,
  removeTitle,
  getList,
  getListStats,
} = require("./controllers/watchlist");
const {
  createReview,
  getReview,
  deleteReview,
} = require("./controllers/review");

const app = express();
app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, //duration = 1 day
    },
  })
);

massive({
  //both values point to the same database (web || local)
  connectionString: DATABASE_URL || CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
})
  .then((dbInstance) => {
    app.set("db", dbInstance);
    console.log(`Connection Successful - Don't forget your towel`);
  })
  .catch((err) => console.log(err));

// Movie Endpoints
app.get("/api/movies/", getPreview);
app.get("/api/movie/:id", getMovie);

// User Auth Endpoints
app.post("/api/auth/register", register);
app.post("/api/auth/login", login);
app.get("/api/auth/me", getUser);
app.put("/api/auth/update/:id", updateEmail);
app.post("/api/auth/logout", logout);
app.delete("/api/auth/destroy/:id", deleteUser);

// Watchlist Endpoints
app.get("/api/watchlist/:id", getList);
app.post("/api/watchlist/add/:id", addTitle);
app.delete("/api/watchlist/delete/:id/:title", removeTitle);

// Stats Endpoints
app.get("/api/stats/list", getListStats);
app.get("/api/stats/ratings", getRatings);

// Review Endpoints
app.get("/api/review/:id/:userid", getReview);
app.post("/api/review/add/:id", createReview);
app.delete("/api/review/delete/:id/:userid", deleteReview);

// Hosting
app.use(express.static(`${__dirname}/../build`));

app.listen(port, () => console.log(`Listening on ${port}`));
