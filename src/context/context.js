import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

export const UserContext = React.createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get("/api/auth/me")
      .then(({ data }) => {
        return setUser(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
