import React, { useContext, useState } from "react";
import { UserContext } from "./../../context/context";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ACTIONS } from "../../redux/listReducer";
import { Menu } from "./Menu";

// Styling
import userLogo from "./../../images/user-logo.png";
import studioLogo from "./../../images/studio-logo.png";
import hamburgerLogo from "./../../images/hamburger.png";
import "../../css/components/Nav.css";

const Nav = () => {
  const { user } = useContext(UserContext);
  const dispatch = useDispatch();
  const [menu, setMenu] = useState(false);

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
        <div className="mobile-menu" onClick={handleMenu}>
          <Menu />
        </div>
      ) : null}

      <div className="full-menu">
        <Menu />
      </div>

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
