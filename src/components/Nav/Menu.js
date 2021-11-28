import React from "react";
import { Link } from "react-router-dom";
import "../../css/components/Nav.css";

export const Menu = () => {
  return (
    <div className="nav-buttons">
      <Link to="/">
        <button> Home </button>
      </Link>
      <Link to="/movies">
        <button> Movies </button>
      </Link>
      <Link to="/previews">
        <button> Previews </button>
      </Link>
      <Link to="/history">
        <button> History </button>
      </Link>
      <Link to="/stats">
        <button> Stats </button>
      </Link>
    </div>
  );
};
