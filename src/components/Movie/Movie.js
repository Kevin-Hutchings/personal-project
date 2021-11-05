import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/context";
import axios from "axios";
import Review from "../Review/Review";
import "./Movie.css";

const Movie = (props) => {
  const [movie, setMovie] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    axios
      .get(`/api/movie/${props.match.params.id}`)
      .then(({ data }) => setMovie(...data))
      .catch((err) => console.log(err));
  }, [props.match.params.id]);

  return (
    <div>
      <h1 className="movie-title"> {movie.title} </h1>
      <section className="movie-container">
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
          <div className='review-section'>
            {user.id ? (
              <Review id={props.match.params.id}/>
            ) : (
              <h2>Log in to leave a personal review / rating!</h2>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Movie;
