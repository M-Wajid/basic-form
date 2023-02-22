import React from "react";

const Delete = (props) => {
  let tempArray = props.user;
  const onChangeHandler = (event) => {
    tempArray.filter((i) => i.name !== event.target.value)
  };
  const onSubmitHandler = (event) =>{
  event.preventDefault();
    props.setUserData(tempArray)
  }
  
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <select name="name" onClick={onChangeHandler}>
          {props.user.map((i) => (
            <option value="name">{i.name}</option>
          ))}
        </select>
        <button type="submit">Delete</button>
      </form>
    </div>
  );
};

export default Delete;
