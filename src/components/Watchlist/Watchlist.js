import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/context";
import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/listReducer";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// Styling
import "react-toastify/dist/ReactToastify.css";
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
        toast.warn("Title removed from Watchlist!");
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

  const handleToggle = () => {
    dispatch({
      type: ACTIONS.TOGGLE,
    });
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
            <button className="list-close" onClick={handleToggle}>
              x
            </button>
            <h2>Watchlist:</h2>
            <div>{listMap}</div>
          </div>
        </div>
      ) : null}
      <ToastContainer position="bottom-right" autoClose={2300} />
    </div>
  );
};

export default Watchlist;
