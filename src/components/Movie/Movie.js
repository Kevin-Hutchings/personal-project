import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Movie.css";

const Movie = (props) => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get(`/api/movie/${props.match.params.id}`)
      .then(({ data }) => setMovie(...data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <h1 className="movie-title"> {movie.title} </h1>
      <div className="movie-container">
        <img src={movie.img} alt="movie poster" />
        <div className="movie-info">
          <section>
            <h3>
              <u>Synopsis:</u>
            </h3>
            {movie.synopsis}
          </section>
          <h3>
            <u>Release Date:</u> {movie.release_date}
          </h3>
          <h3>
            <u>Director:</u> {movie.director}
          </h3>
          <h3>
            <u>Music:</u> {movie.music}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Movie;
