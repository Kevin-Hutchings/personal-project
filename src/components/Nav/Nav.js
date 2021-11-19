import React, { useContext, useState } from "react";
import { UserContext } from "./../../context/context";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/listReducer";

// Styling
import userLogo from "./../../images/user-logo.png";
import studioLogo from "./../../images/studio-logo.png";
import hamburgerLogo from "./../../images/hamburger.png";
import "../../css/components/Nav.css";

const Nav = () => {
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(true);

  const handleToggle = () => {
    dispatch({
      type: ACTIONS.TOGGLE,
    });
  };

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <nav>
      <img className="studio-logo" src={studioLogo} alt="studio logo" />
      <img
        src={hamburgerLogo}
        onClick={handleMenu}
        className="mobile-menu-button"
        alt="menu icon"
      />

      {menu ? (
        <div className="nav-buttons">
          <Link to="/">
            <button onClick={handleMenu}> Home </button>
          </Link>
          <Link to="/movies">
            <button onClick={handleMenu}> Movies </button>
          </Link>
          <Link to="/history">
            <button onClick={handleMenu}> History </button>
          </Link>
          <Link to="/music">
            <button onClick={handleMenu}> Music </button>
          </Link>
          <Link to="/stats">
            <button onClick={handleMenu}> Stats </button>
          </Link>
        </div>
      ) : null}

      <div>
        {user.id ? (
          <div className="user-info">
            <h2>Welcome, {user.username}!</h2>
            <button className="list-toggle" onClick={handleToggle}>
              Watchlist
            </button>
          </div>
        ) : null}
      </div>

      <Link to="/auth">
        <img className="user-icon" src={userLogo} alt="user-logo" />
      </Link>
    </nav>
  );
};

export default Nav;
