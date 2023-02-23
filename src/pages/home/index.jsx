import React from "react";
import Card from "../../components/card";
import { Link } from "react-router-dom";
import "./home.css";

const Home = (props) => {
  console.log(props.user);
  const users = props.user;
  return (
    <>
      <Card user={users} />
      <div className="buttons-class">
        <button style={{margin: "10px"}}>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/add"
          >
            Add-Data
          </Link>
        </button>
        <button style={{margin: "10px"}}>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/edit"
          >
            Edit-Data
          </Link>
        </button>
        <button style={{margin: "10px"}}>
          <Link
            style={{
              textDecoration: "none",
              color: "black",
            }}
            to="/delete"
          >
            Delete-Data
          </Link>
        </button>
      </div>
    </>
  );
};
export default Home;
