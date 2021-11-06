import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/context";
import { useSelector, useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/listReducer";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./Watchlist.css";

const Watchlist = () => {
  const { user } = useContext(UserContext);
  const list = useSelector((state) => state.list.title);
  const toggle = useSelector((state) => state.list.toggle);
  const dispatch = useDispatch();
  const history = useHistory();

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

  const listMap = list.map((el, index) => {
    return (
      <ul className="list-info">
        <li key={index}> {el.title} </li>
        <button onClick={() => removeTitle(user.id, el.title)}> - </button>
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
