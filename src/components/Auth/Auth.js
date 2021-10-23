import React, { useState, useReducer } from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import authReducer from '../../redux/reducer';
import './Auth.css';

const initialState = {
    username: '',
    email: '',
    password: '',
    isLoggedIn: false,
};

const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const Auth = () => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const { username, email, password, isLoggedIn } = state;
    const [user, setUser] = useState([]);

    // let history = useHistory();

    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            const req = await axios.post('/api/auth/register', {username, email, password});
            dispatch({ type: REGISTER, payload: { data: req.data}});
            // history.push('/');
        } catch (err) { console.log(err) }
    };

    const login = async () => {
        try {
            const req = await axios.post('/api/auth/login', {username, password});
            dispatch({ type: LOGIN, payload: { data: req.data } });
            // history.push('/')
        } catch (err) { 
            console.log(err) 
        } finally {
            await axios.get('/api/auth/me')
            .then(({ data }) => setUser(data))
            .catch(err => console.log(err))
        }
    };
    

    return(
        <div>
            {isLoggedIn ? (
                <div>
                    <h1> Welcome {user.username}! </h1>
                    <button onClick={() => dispatch({ type: LOGOUT })}> Logout</button>
                </div>
            ) : (
                <form>
                    <input
                        type='text'
                        placeholder='username'
                        value={username}
                        onChange={(e) => dispatch({
                            type: 'field',
                            fieldName: 'username',
                            payload: e.target.value,
                        })}
                    />
                    <input
                        placeholder='Email'
                        type='email'
                        value={email}
                        onChange={(e) => dispatch({
                            type: 'field',
                            fieldName: 'email',
                            payload: e.target.value,
                        })}
                    />
                    <input
                        placeholder='Password'
                        type='password'
                        value={password}
                        onChange={(e) => dispatch({
                            type: 'field',
                            fieldName: 'password',
                            payload: e.target.value,
                        })}
                    />
                    <div className='buttons'>
                        <button onClick={login}> Log In </button>
                        <button onClick={onSubmit}> Register </button>
                    </div>
                </form>
                )}
        </div>
    );
}

export default Auth;
