import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateUser, logout } from './../../redux/reducer';
import './Auth.css';

const Auth = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = {username, email, password};

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
            alert('login success!')
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

    const logoutUser = () => {
        axios.post('/api/auth/logout')
        .then(logout)
        .catch(err => console.log(err));
    }

    return(
        <form>
            <input 
                placeholder='Username'
                onChange={e => addUsername(e.target.value)}
            />
            <input
                placeholder='Email'
                onChange={e => addEmail(e.target.value)}
            />
            <input
                placeholder='Password'
                onChange={e => addPassword(e.target.value)}
            />

            <div className='buttons'>
                <button onClick={login}> Log In </button>
                <button onClick={register}> Register </button>
            </div>
            <button onClick={logoutUser}> Logout </button>
        </form>
    )
}

export default connect(null, { updateUser })(Auth);
