import React from "react";
import { Link } from 'react-router-dom';
import './Nav.css';
import userLogo from './../../images/user-logo.png';
import studioLogo from './../../images/studio-logo.png';

const Nav = () => {

    return(
        <nav>
            <img 
                className="studio-logo" 
                src={studioLogo} 
                alt='studio logo'
            />
            <div className="buttons">
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
                <Link to='/auth'>
                    <img 
                        className='user-icon' 
                        src={userLogo}
                        alt='user-logo'
                    />
                </Link>
            </div>
        </nav>
    )
}

export default Nav;