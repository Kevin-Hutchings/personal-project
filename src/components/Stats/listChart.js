import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";
export const PieChart = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    try {
      axios.get("/api/stats").then(({ data }) => setListData(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  const data = {
    labels: listData.map((el) => el.title),
    datasets: [
      {
        label: "# of occurences",
        data: listData.map((el) => el.count),
        backgroundColor: [
          "#ff0000",
          "#ff4000",
          "#ff8000",
          "#ffbf00",
          "#ffff00",
          "#bfff00",
          "#80ff00",
          "#0040ff",
          "#8000ff",
          "#808080",
        ],
        borderColor: "#385a7785",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          color: "white",
        },
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};
