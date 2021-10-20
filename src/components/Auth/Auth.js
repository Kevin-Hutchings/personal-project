import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser } from './../../redux/reducer';
import './Auth.css';

const Auth = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = [username, email, password];

    let history = useHistory();

    const addUsername = (name) => {
        setUsername(name);
    }

    const addEmail = (email) => {
        setEmail(email);
    }

    const addPassword = (pass) => {
        setPassword(pass);
    }

    const login = () => {
        axios.post('/api/auth/login', user)
        .then(({ data }) => {
            updateUser(data);
            history.push('/')
        })
        .catch((err) => console.log(err));
    }

    const register = () => {
        axios.post('/api/auth/register', user)
        .then(({ data }) => {
            updateUser(data);
            history.push('/')
        })
        .catch((err) => console.log(err))
    }

    return(
        <form>
            <input 
                placeholder='Username'
                value={username}
                onChange={e => addUsername(e.target.value)}
            />
            <input
                placeholder='Email'
                value={email}
                onChange={e => addEmail(e.target.value)}
            />
            <input
                placeholder='Password'
                value={password}
                onChange={e => addPassword(e.target.value)}
            />

            <div className='buttons'>
                <button onClick={login}> Log In </button>
                <button onClick={register}> Register </button>
            </div>
        </form>
    )
}

export default connect(null, { updateUser })(Auth);
