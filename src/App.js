import React from 'react';
import routes from './routes';
import Nav from './components/Nav/Nav';
import Watchlist from './components/Watchlist/Watchlist';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Watchlist />
      {routes}
    </div>
  );
}

export default App;
