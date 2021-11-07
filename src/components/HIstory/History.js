import React, { useContext } from "react";
import { UserContext } from "../../context/context";
import { useSelector } from "react-redux";
import About from "./history-components/About";
import Miyazaki from "./history-components/Miyazaki";
import Hisaishi from "./history-components/Hisaishi";
import "../../css/components/History.css";

const History = () => {
  const { user } = useContext(UserContext);
  const toggle = useSelector((state) => state.list.toggle);

  return (
    <div className={`history ${toggle && user.id ? "smash" : ""}`}>
      <About />
      <Miyazaki />
      <Hisaishi />
    </div>
  );
};

export default History;
