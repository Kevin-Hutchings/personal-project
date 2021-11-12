import React from "react";
import { ListChart } from "./ListChart";
import { MovieRatings } from "./MovieRatings";
import "../../css/components/Stats.css";

const Stats = () => {
  return (
    <div className="stats">
      <h1>Watchlist Occurences</h1>
      <div className="pie-chart">
        <ListChart />
      </div>

      <div className="bar">
        <MovieRatings />
      </div>
    </div>
  );
};

export default Stats;
