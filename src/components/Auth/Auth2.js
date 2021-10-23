// import React, { useReducer } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import { connect } from 'react-redux';
// import userReducer from './../../redux/reducer';
// import './Auth.css';


// const Auth = () => {
//     const [username, setUsername] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const user = {username, email, password};
    
//     const initialState = {
//         username: '',
//         email: '',
//         password: '',
//     };
    
//     const [state, dispatch] = useReducer(authReducer, initialState);
//     let history = useHistory();

//     const handleLogout = () => {
//         dispatch({ type: "LOGOUT"})
//     }

//     const addUsername = (name) => {
//         setUsername(name);
//     }

//     const addEmail = (email) => {
//         setEmail(email);
//     }

//     const addPassword = (pass) => {
//         setPassword(pass);
//     }

//     const login = () => {
//         axios.post('/api/auth/login', )
//         .then(() => {
//             alert('login success!');
//             history.push('/');
//         })
//         .catch((err) => console.log(err));
//     }

//     const register = () => {
//         axios.post('/api/auth/register', )
//         .then(({ data }) => {
//             console.log(data)
//             history.push('/');
//         })
//         .catch((err) => console.log(err))
//     }

//     const logoutUser = () => {
//         axios.post('/api/auth/logout')
//         .then(console.log('logged out'))
//         .catch(err => console.log(err));
//     }

//     return(
//         <form>
//             <input 
//                 placeholder='Username'
//                 type='text'
//             />
//             <input
//                 placeholder='Email'
//                 type='email'
//             />
//             <input
//                 placeholder='Password'
//                 type='password'
//             />

//             <div className='buttons'>
//                 <button onClick={login}> Log In </button>
//                 <button onClick={register}> Register </button>
//             </div>
//             <button onClick={logoutUser}> Logout </button>
//         </form>
//     )
// }

// // const mapStateToProps = (state) => {
// //     return {
// //         username: state.username,
// //         email: state.email,
// //     }
// // }

// // const mapDispatchToProps = {
// //     updateUser,
// //     logout,
// // }

// // export default connect(null, mapDispatchToProps)(Auth);