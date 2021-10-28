import React from "react";
import { Switch, Route } from 'react-router-dom';

//Components
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Movie from "./components/Movie/Movie";
import History from "./components/History/History";
import Auth from "./components/Auth/Auth";
import Watchlist from "./components/Watchlist/Watchlist";

export default(
    <Switch>
        <Route component={Auth} exact path='/' />
        <Route component={Home} path='/home' />
        <Route component={Movies} path='/movies' />
        <Route component={Movie} path='/movie/:id' />
        <Route component={History} path='/history' />
        <Route component={Watchlist} path='/watchlist' />
    </Switch>
);