import React, { useContext, useState } from "react";
import { UserContext } from "../../context/context";
import { useSelector } from "react-redux";

// Components
import About from "./history-components/About";
import Miyazaki from "./history-components/Miyazaki";
import Hisaishi from "./history-components/Hisaishi";
import "../../css/components/History.css";

const History = () => {
  const { user } = useContext(UserContext);
  const toggle = useSelector((state) => state.list.toggle);
  const [collapse, setCollapse] = useState(true);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div className={`history ${toggle && user.id ? "smash" : ""}`}>
      <div onClick={handleCollapse} className={collapse ? "collapse" : null}>
        <About />
      </div>
      <div onClick={handleCollapse} className={collapse ? "collapse" : null}>
        <Miyazaki />
      </div>
      <div onClick={handleCollapse} className={collapse ? "collapse" : null}>
        <Hisaishi />
      </div>
    </div>
  );
};

export default History;
