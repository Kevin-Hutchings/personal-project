import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "./../../context/context";
import { useDispatch, useSelector } from "react-redux";
import { ACTIONS } from "../../redux/listReducer";
import "./Movies.css";

const Movies = () => {
  const { user } = useContext(UserContext);
  const [preview, setPreview] = useState([]);
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.list.toggle);

  useEffect(() => {
    axios
      .get("/api/movies")
      .then(({ data }) => setPreview(data))
      .catch((err) => console.log(err));
  }, []);

  const addToList = (title, userId, movieId) => {
    try {
      axios
        .post(`/api/watchlist/add/${user.id}`, { title, userId, movieId })
        .then(({ data }) => {
          dispatch({
            type: ACTIONS.ADD_TITLE,
            payload: data,
          });
          axios.get(`/api/watchlist/${user.id}`).then(({ data }) => {
            dispatch({
              type: ACTIONS.GET_LIST,
              payload: data,
            });
          });
          alert("Sucess! Added movie to watchlist");
        })
        .catch((err) => alert("Movie already in list!"));
    } catch (err) {
      console.log(err);
    }
  };

  const previewMap = preview
    .filter(
      (movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase()) ||
        movie.director.toLowerCase().includes(search.toLowerCase())
    )
    .map((movie, index) => {
      return (
        <div key={index} className="preview">
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.img} alt="movie poster" />
          </Link>
          <h4>
            {movie.title} ({movie.release_date})
            {user.id ? (
              <button
                onClick={() => addToList([movie.title, user.id, movie.id])}
              >
                +
              </button>
            ) : null}
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
            placeholder="Search by Title / Director"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button> A-Z </button>
        </div>
      </header>
      <div className={`catalog ${toggle && user.id ? "smash" : ""}`}>
        {previewMap}
      </div>
    </div>
  );
};

export default Movies;
