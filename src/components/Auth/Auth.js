import React, { useReducer } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import authReducer, { initialState, ACTIONS } from "../../redux/authReducer";
import { useUserContext } from "./../../context/context";
import UserSettings from "./UserSettings";
import "../../css/components/Auth.css";

const Auth = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const { username, email, password } = state;
  const { setUser, user } = useUserContext();
  let history = useHistory();

  const register = async (e) => {
    try {
      e.preventDefault();
      const req = await axios.post("/api/auth/register", {
        username,
        email,
        password,
      });
      dispatch({ type: ACTIONS.REGISTER, payload: { data: req.data } });
      history.go(0);
    } catch (err) {
      console.log(err);
    }
  };

  const login = async (e) => {
    try {
      e.preventDefault();
      const req = await axios.post("/api/auth/login", { username, password });
      dispatch({ type: ACTIONS.LOGIN, payload: { data: req.data } });
      setUser(req.data);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    try {
      axios.post("/api/auth/logout").then(() => {
        setUser({});
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {user.id ? (
        <div className="welcome">
          <h1> Welcome, {user.username}! </h1>
          <button onClick={logout}> Logout</button>
          <div>
            <UserSettings />
          </div>
        </div>
      ) : (
        <form className="auth-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "username",
                payload: e.target.value,
              })
            }
          />
          <input
            placeholder="Email (Not Required)"
            type="email"
            value={email}
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "email",
                payload: e.target.value,
              })
            }
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "password",
                payload: e.target.value,
              })
            }
          />
          <div className="auth-buttons">
            <button onClick={login}> Log In </button>
            <button onClick={register}> Register </button>
            <button onClick={logout}> Logout </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Auth;
