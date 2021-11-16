CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(200) NOT NULL,
    username VARCHAR(50) NOT NULL
);

CREATE TABLE movies(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50),
    img TEXT,
    synopsis VARCHAR(2000),
    release_date INT,
    director VARCHAR(50),
    music VARCHAR(50),
    metascore INT,
    link TEXT,
    tomato INT
);

CREATE TABLE watchlist(
    id SERIAL PRIMARY KEY,
    title VARCHAR(50) NOT NULL,
    is_watched BOOLEAN,
    movie INT REFERENCES movies(id),
    users INT REFERENCES users(id)
);

CREATE TABLE reviews(
    id SERIAL PRIMARY KEY,
    review VARCHAR(2000),
    user_rating INT,
    users INT REFERENCES users(id),
    movie INT REFERENCES movies(id)
);