import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/context";
import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/listReducer";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../css/components/Watchlist.css";

const Watchlist = () => {
  const { user } = useContext(UserContext);
  const list = useSelector((state) => state.list.title);
  const toggle = useSelector((state) => state.list.toggle);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`/api/watchlist/${user.id}`)
      .then((res) => {
        dispatch({
          type: ACTIONS.GET_LIST,
          payload: res.data,
        });
      })
      .catch((err) => console.log(err));
  }, [dispatch, user.id]);

  const removeTitle = (id, title) => {
    try {
      axios.delete(`/api/watchlist/delete/${id}/${title}`).then(({ data }) => {
        dispatch({
          type: ACTIONS.DELETE_TITLE,
          payload: data,
        });
      });
      axios.get(`/api/watchlist/${user.id}`).then(({ data }) => {
        dispatch({
          type: ACTIONS.GET_LIST,
          payload: data,
        });
      });
    } catch (e) {
      console.log(e);
    }
  };

  const listMap = list.map((movie, index) => {
    return (
      <ul className="list-info">
        <Link to={`/movie/${movie.movie}`} className="text-link">
          <li key={index}> {movie.title} </li>
        </Link>
        <button onClick={() => removeTitle(user.id, movie.title)}> - </button>
      </ul>
    );
  });

  return (
    <div>
      {toggle ? (
        <div className="watchlist">
          <div>
            <h2>Watchlist:</h2>
            <div>{listMap}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Watchlist;
