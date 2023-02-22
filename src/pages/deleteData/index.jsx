import React from "react";
import { useNavigate } from "react-router-dom";

const Delete = (props) => {
  const navigate = useNavigate();
  const onChangeHandler = (event) => {
    const filteredArray = props.user.filter((i) => i.name !== event.target.value)
    props.setUserData(filteredArray);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    navigate("/");
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <select name="name" onChange={onChangeHandler}>
          <option>default</option>
          {props.user.map((i) => ( 
            <option value={i.name}>{i.name}</option>
          ))}
        </select>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default Delete;
