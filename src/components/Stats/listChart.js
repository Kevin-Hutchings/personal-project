import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pie } from "react-chartjs-2";

export const ListChart = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    try {
      axios.get("/api/stats/list").then(({ data }) => setListData(data));
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
          "#ff4d4d",
          "#ff794d",
          "#ffa64d",
          "#ffff4d",
          "#79ff4d",
          "#4dffa6",
          "#4dd2ff",
          "#794dff",
          "#d24dff",
          "#ff4d79",
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
