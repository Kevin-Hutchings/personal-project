import React, { useState } from "react";
import "../../css/components/History.css";

const Accordion = ({ title, content, cont, awards }) => {
  const [collapse, setCollapse] = useState(false);

  const handleCollapse = () => {
    setCollapse(!collapse);
  };

  return (
    <div>
      <div className="history-about" onClick={handleCollapse}>
        <h1>{title}</h1>
        <div>{collapse ? "-" : "+"}</div>
      </div>
      {collapse && (
        <section className="history-content">
          <p>{content}</p>
          <p>{cont}</p>
          <p>{awards}</p>
        </section>
      )}
    </div>
  );
};

export default Accordion;
