import React, { useContext } from "react";
import { UserContext } from "../../context/context";
import { useSelector } from "react-redux";
import { historyData } from "./data";
import Accordion from "./Accordion";
import "../../css/components/History.css";

const History = () => {
  const { user } = useContext(UserContext);
  const toggle = useSelector((state) => state.list.toggle);

  const historyDisplay = historyData.map(({ title, content, cont, awards }) => {
    return (
      <Accordion title={title} content={content} cont={cont} awards={awards} />
    );
  });

  return (
    <div className={`history ${toggle && user.id ? "history-smash" : ""}`}>
      {historyDisplay}
    </div>
  );
};

export default History;
