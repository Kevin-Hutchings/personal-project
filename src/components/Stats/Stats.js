import React from "react";
import { PieChart } from "./listChart";
import "../../css/components/Stats.css";

const Stats = () => {
  return (
    <div className="stats">
      <h1>Watchlist occurences</h1>
      <div className="pie-chart">
        <PieChart />
      </div>
    </div>
  );
};

export default Stats;
