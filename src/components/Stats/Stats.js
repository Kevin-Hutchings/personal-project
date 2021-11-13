import React from "react";
import { ListChart } from "./ListChart";
import { MovieRatings } from "./MovieRatings";
import "../../css/components/Stats.css";

const Stats = () => {
  return (
    <div className="stats">
      <div className="pie-chart">
        <h1>Watchlist Occurences</h1>
        <ListChart />
      </div>

      <div className="bar">
        <h1>Movie Ratings</h1>
        <MovieRatings />
      </div>
    </div>
  );
};

export default Stats;
