import React from "react";
import "./card-style.css";

const Card = (props) => {
  const singleCard = (i) => {
    return (
      <div className="cards">
        <img src="./images/image_temp.png" alt="" />
        <p1>{i.name}</p1>
        <button>
          Details
        </button>
      </div>
    );
  };
  return <div className="main">{props.user.map(singleCard)}</div>;
};

export default Card;
