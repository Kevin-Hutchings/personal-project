import React, { useContext } from "react";
import { UserContext } from './../../context/context';
import { Link } from 'react-router-dom';

import './Nav.css';
import userLogo from './../../images/user-logo.png';
import studioLogo from './../../images/studio-logo.png';

const Nav = () => {
    const {user}  = useContext(UserContext);
    console.log(user);
    return(
        <nav>
            <img 
                className="studio-logo" 
                src={studioLogo} 
                alt='studio logo'
            />
            <div className="buttons">
                <Link to='/home'>
                    <button className='button'> Home </button>
                </Link>
                <Link to='/movies'>
                    <button className='button'> Movies </button>
                </Link>
                <Link to='/history'>
                    <button className='button'> History </button>
                </Link>
                <Link to='/music'>
                    <button className='button'> Music </button>
                </Link>
                {!user.username ? ( 
                    <h1>please log in</h1>
                    ) : (<h1> Name: {user.username} Id: {user.id} </h1>
                )}
                <Link to='/'>
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