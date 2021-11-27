import React from "react";
import { homeData } from "./data";
import "../../css/components/Home.css";

const dataMap = homeData.map((el, index) => {
  const { title, content, content2, content3 } = el;
  return (
    <div className="home-info">
      <h2 key={index}>{title}</h2>
      <p>{content}</p>
      <p>{content2}</p>
      <p>{content3}</p>
    </div>
  );
});

const Home = () => {
  return (
    <div className="home">
      <header>
        <h1> A Love Letter to Studio Ghibli </h1>
      </header>
      <div className="info-container">{dataMap}</div>
    </div>
  );
};

export default Home;
