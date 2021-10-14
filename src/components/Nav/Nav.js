import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {

    return(
        <nav>
            <Link to='/'>
                <button className='nav-button'> Home </button>
            </Link>
            <Link to='/movies'>
                <button className='nav-button'> Movies </button>
            </Link>
            <Link to='/history'>
                <button className='nav-button'> History </button>
            </Link>
            <Link to='/music'>
                <button className='nav-button'> Music </button>
            </Link>
        </nav>
    )
}

export default Nav;