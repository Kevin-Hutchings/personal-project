import React from "react";
import { Switch, Route } from 'react-router-dom';
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Movie from "./components/Movie/Movie";
import History from "./components/History/History";
import Auth from "./components/Auth/Auth";

export default(
    <Switch>
        <Route component={Home} exact path='/' />
        <Route component={Movies} path='/movies' />
        <Route component={Movie} path='/movie/:id' />
        <Route component={History} path='/history' />
        <Route component={Auth} path='/auth' />
    </Switch>
);