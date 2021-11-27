import React from "react";
import { ListChart } from "./listChart";
import { MovieRatings } from "./MovieRatings";
import { RatingsMobile } from "./RatingsMobile";
import "../../css/components/Stats.css";

const Stats = () => {
  return (
    <div className="stats">
      <div className="pie-chart">
        <h1>Top 10 Watchlist Occurences</h1>
        <ListChart />
      </div>

      <div className="bar">
        <h1>Movie Ratings</h1>
        <MovieRatings />
      </div>

      <div className="bar-mobile">
        <h1>Movie Ratings</h1>
        <RatingsMobile />
      </div>
    </div>
  );
};

export default Stats;
