import React, { useContext } from "react";
import routes from "./routes";
import Nav from "./components/Nav/Nav";
import Watchlist from "./components/Watchlist/Watchlist";
import { UserContext } from "./context/context";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="App">
      <Nav />
      {user.id ? <Watchlist /> : null}
      {routes}
    </div>
  );
}

export default App;
