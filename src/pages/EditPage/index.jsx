import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EditPage = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: props.temp.name,
    email: props.temp.email,
    dob: props.temp.dob,
    ocupation: props.temp.ocupation,
    gender: props.temp.gender,
  });

  const onChangeHandler = (event) => {
      setFormData(()=> ({
        ...formData,
        [event.target.name]:event.target.value
      }))
  };

  const onSubmitHandler = (event) =>{
    event.preventDefault();
    let temp = props.user;
    temp.push(formData);
    console.log(temp);
    props.setUserData(temp);
    navigate('/');
  }

  return (
    <div className="main">
      <form onSubmit={onSubmitHandler}>
        <h1>Form</h1>
        
        <lable>Name:</lable>
        <div>
          <input name="name" type="text" defaultValue={props.temp.name} onChange={onChangeHandler}/>
        </div>
        
        <lable>Email:</lable>
        <div>
          <input name="email" type="text" defaultValue={props.temp.email} onChange={onChangeHandler}/>
        </div>

        <label>Date of Birth:</label>
        <div>
          <input name="dob" type="date" defaultValue={props.temp.dob} onChange={onChangeHandler}/>
        </div>
       
        <lable>Ocupation:</lable>
        <div>
          <input name="ocupation" type="text" defaultValue={props.temp.ocupation} onChange={onChangeHandler} />
        </div>
        
        <div>
          <label>Gender:</label>
          <div>
            <input name="gender" type="text" defaultValue={props.temp.gender} onChange={onChangeHandler} />
          </div>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>

      </form>
    </div>
  );
}

export default EditPage;
