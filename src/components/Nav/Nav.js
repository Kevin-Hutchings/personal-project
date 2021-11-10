import React, { useContext } from "react";
import { UserContext } from "./../../context/context";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/listReducer";

// Styling
import userLogo from "./../../images/user-logo.png";
import studioLogo from "./../../images/studio-logo.png";
import "../../css/components/Nav.css";

const Nav = () => {
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({
      type: ACTIONS.TOGGLE,
    });
  };

  return (
    <nav>
      <img className="studio-logo" src={studioLogo} alt="studio logo" />
      <div className="nav-buttons">
        <Link to="/">
          <button> Home </button>
        </Link>
        <Link to="/movies">
          <button> Movies </button>
        </Link>
        <Link to="/history">
          <button> History </button>
        </Link>
        <Link to="/music">
          <button> Music </button>
        </Link>
        <Link to="/stats">
          <button> Stats </button>
        </Link>
        <div>
          <Link to="/auth">
            <img className="user-icon" src={userLogo} alt="user-logo" />
          </Link>
        </div>
        {user.id ? (
          <div className="user-info">
            <h2>Welcome, {user.username}!</h2>
            <button className="list-toggle" onClick={handleToggle}>
              Watchlist
            </button>
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Nav;
