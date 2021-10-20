import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return(
        <form>
            <input placeholder='Username' />
            <input placeholder='Email' />
            <input placeholder='Password' />

            <div className='buttons'>
                <button> Log In</button>
                <button> Register </button>
            </div>
        </form>
    )
}

export default Auth;
