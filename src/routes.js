import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Home from "./components/Home/Home";
import Movies from "./components/Movies/Movies";
import Movie from "./components/Movie/Movie";
import History from "./components/HIstory/History";
import Auth from "./components/Auth/Auth";
import Watchlist from "./components/Watchlist/Watchlist";
import Music from "./components/Music/Music";
import Stats from "./components/Stats/Stats";

export default (
  <Switch>
    <Route component={Auth} path="/auth" />
    <Route component={Movies} path="/movies" />
    <Route component={Movie} path="/movie/:id" />
    <Route component={History} path="/history" />
    <Route component={Watchlist} path="/watchlist" />
    <Route component={Music} path="/music" />
    <Route component={Stats} path="/stats" />
    <Route component={Home} exact path="/" />
  </Switch>
);
