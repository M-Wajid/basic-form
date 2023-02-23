import React from "react";
import "./card-style.css";

const Card = (props) => {
  const singleCard = (i) => {
    return (
      <div className="cards">
        <img src="./images/image_temp.png" alt="" />     
        <div className="data">
          <p1>{i.name}</p1>
          <p2>{i.email}</p2>
          <p2>{i.dob}</p2>
          <p2>{i.gender}</p2>
          <p2>{i.ocupation}</p2>
        </div>
      </div>
    );
  };
  return <div className="main">{props.user.map(singleCard)}</div>;
};

export default Card;
