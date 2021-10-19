import React from 'react';
import './Auth.css'

const Auth = () => {
    return(
        <form>
            <input placeholder='Username' />
            <input placeholder='Password' />

            <div className='buttons'>
                <button> Log In</button>
                <button> Register </button>
            </div>
        </form>
    )
}

export default Auth;
