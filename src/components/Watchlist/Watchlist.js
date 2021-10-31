import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/context";
import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/reducer";
import axios from "axios";
import "./Watchlist.css";

const Watchlist = () => {
  const { user } = useContext(UserContext);
  const list = useSelector((state) => state.title);
  const dispatch = useDispatch();
  // console.log(list)

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
  });

  const removeTitle = (id, title) => {
    try {
      axios.delete(`/api/watchlist/delete/${id}/${title}`);
      dispatch({
        type: ACTIONS.DELETE_TITLE,
      })
    } catch (e) {
      console.log(e);
    }
  };

  const listMap = list.map((el, index) => {
    return (
      <ol className="list-info">
        <li key={index}> {el.title} </li>
        <button onClick={() => removeTitle(user.id, el.title)}> - </button>
      </ol>
    );
  });

  return (
    <div className="watchlist">
      {user.id ? (
        <div>
          <h2> Watchlist: logged in </h2>
          <div> {listMap} </div>
        </div>
      ) : (
        <h2> Watchlist: not logged in </h2>
      )}
    </div>
  );
};

export default Watchlist;
