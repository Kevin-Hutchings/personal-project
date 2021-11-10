import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../css/components/Stats.css";

const Stats = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    try {
      axios.get("/api/stats")
      .then(({ data }) => setListData(data))
    } catch (err) {
      console.log(err);
    }
  }, []);
  
  const listDisplay = listData.map((el, index) => {
    return (
      <ul>
        <li key={index}>Title: "{el.title}." Count: {el.count}</li>
      </ul>
    )
  })

  return (
    <div className="stats">
      <h1>TEST COMPONENT PLEASE IGNORE</h1>
      {listDisplay}
    </div>
  );
};

export default Stats;
