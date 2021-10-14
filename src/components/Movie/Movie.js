import React, { useState, useEffect} from "react";
// import React, {Component} from "react";
import axios from "axios";
import './Movie.css';

const Movie = (props) => {
const [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get(`/api/movie/${props.match.params.id}`)
        .then(({ data }) => setMovie(...data))
        .catch(err => console.log(err));
    });

    return(
        <div className='movie-container'>
            <h1> Title: {movie.title} </h1>
            <img src={movie.img} alt='movie poster' />
            <p>{movie.synopsis}</p>
            <ul>
                <li>Release Date: {movie.release_date}</li>
                <li>Director: {movie.director}</li>
                <li>Music: {movie.music}</li>
            </ul>
        </div>
    )
}

export default Movie;