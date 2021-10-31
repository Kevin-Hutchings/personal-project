import React, { useContext } from "react";
import { UserContext } from "./../../context/context";
import { Link } from "react-router-dom";

//styling
import userLogo from "./../../images/user-logo.png";
import studioLogo from "./../../images/studio-logo.png";
import "./Nav.css";

const Nav = () => {
  const { user } = useContext(UserContext);

  return (
    <nav>
      <img className="studio-logo" src={studioLogo} alt="studio logo" />
      <div className="buttons">
        <Link to="/home">
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
        <Link to="/">
          <img className="user-icon" src={userLogo} alt="user-logo" />
        </Link>
        <div className='user-info'>
          {!user.id ? (
            <h1> log in </h1>
          ) : (
            <h2>
              {" "}
              Name: {user.username} Id: {user.id}{" "}
            </h2>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
