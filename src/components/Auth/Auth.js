import React, { useReducer } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import authReducer, { initialState, ACTIONS } from "../../redux/reducer";
import { useUserContext } from "./../../context/context";
import "./Auth.css";

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
    } catch (err) {
      console.log(err);
    }
  };

  const login = async () => {
    try {
      const req = await axios.post("/api/auth/login", { username, password });
      dispatch({ type: ACTIONS.LOGIN, payload: { data: req.data } });
      history.push("/movies");
      axios
        .get("/api/auth/me")
        .then(({ data }) => setUser(data))
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err);
    }
  };

  const logout = () => {
    axios
      .post("/api/auth/logout")
      .then(() => {
        dispatch({ type: ACTIONS.LOGOUT });
        setUser({});
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {user.id ? (
        <div>
          <h1> Welcome {user.username}! </h1>
          <button onClick={logout}> Logout</button>
        </div>
      ) : (
        <form>
          <input
            type="text"
            placeholder="username"
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
            placeholder="Email"
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
          <div className="buttons">
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
