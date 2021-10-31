import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "./../../context/context";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/reducer";
import "./Movies.css";

const Movies = () => {
  const { user } = useContext(UserContext);
  const [preview, setPreview] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/movies")
      .then(({ data }) => setPreview(data))
      .catch((err) => console.log(err));
  }, []);

  const addToList = (title, userId) => {
    axios.post(`/api/watchlist/add/${user.id}`, {title, userId})
    .then(({ data }) => {
      dispatch({
        type: ACTIONS.ADD_TITLE,
        payload: data,
      })
    }).catch((e) => console.log(e))
  }
  

  const previewMap = preview
    .filter((el) => el.title.toLowerCase().includes(search.toLowerCase()))
    .map((movie, index) => {
      return (
        <div key={index} className="preview">
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.img} alt="movie poster" />
          </Link>
          <h4>
            {movie.title} ({movie.release_date})
            {user.id ? (
              <button onClick={() => addToList([movie.title, user.id])}> + </button>
            ) : ''}
          </h4>
        </div>
      );
    });

  return (
    <div>
      <header className="catalog-header">
        <h1> The Movies of Studio Ghibli</h1>
        <div className="input-container">
          <input
            type="text"
            placeholder="Search by Title"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button> A-Z </button>
        </div>
      </header>
      <div className="catalog">{previewMap}</div>
    </div>
  );
};

export default Movies;
