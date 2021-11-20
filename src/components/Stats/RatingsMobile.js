import React, { useState, useEffect } from "react";
import axios from "axios";
import { Bar } from "react-chartjs-2";

export const RatingsMobile = () => {
  const [ratings, setRatings] = useState([]);

  useEffect(() => {
    try {
      axios.get("/api/stats/ratings").then(({ data }) => setRatings(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const data = {
    labels: ratings.map((movie) => movie.title),
    datasets: [
      {
        label: "metacritic",
        data: ratings.map((movie) => movie.metascore),
        backgroundColor: "#385a7785",
        borderColor: "#000000",
        borderWidth: 2,
      },
      {
        label: "Rotten Tomatoes",
        data: ratings.map((movie) => movie.tomato),
        backgroundColor: "#f04242",
        borderColor: "#000000",
        borderWidth: 2,
      },
    ],
  };

  const optionsMobile = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      xAxes: {
        // grid: {
        //   color: "grey",
        // },
        ticks: {
          color: "white",
        },
      },
      yAxes: {
        ticks: {
          color: "white",
        },
      },
    },
  };

  return (
    <div
      style={{
        height: "80vh",
        width: "95vw",
      }}
    >
      <Bar data={data} options={optionsMobile} />
    </div>
  );
};
