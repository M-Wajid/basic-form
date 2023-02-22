import React from "react";

import Card from "../../components/card";
import { Link } from "react-router-dom";
import "./home.css"

const Home = (props) => {
  console.log(props.user);
  const users = props.user;
  return (
    <div>
      <div className="main">
        <Card user={users} />
      </div>
      <button>
        <Link to="/add">Add-Data</Link>
      </button>
      <button>
        <Link to="/edit">Edit-Data</Link>
      </button>
      <button>
        <Link to="/delete">Delete-Data</Link>
      </button>
    </div>
  );
};
export default Home;
