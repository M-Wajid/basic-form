import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import './addData.css';

const Add = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    ocupation: "",
    gender: "",
  });

  const onChangeHandler = (event) => {
      setFormData(()=> ({
        ...formData,
        [event.target.name]:event.target.value
      }))
  };

  const onSubmitHandler = (event) =>{
    event.preventDefault();
    props.setUserData(()=>({
      ...props.user,
    [props.user.length]:formData
    }))
  }

  return (
    <div className="main">
      <form onSubmit={onSubmitHandler}>
        <h1>Form</h1>
        
        <lable>Name:</lable>
        <div>
          <input name="name" type="text" onChange={onChangeHandler}/>
        </div>
        
        <lable>Email:</lable>
        <div>
          <input name="email" type="text" onChange={onChangeHandler}/>
        </div>

        <label>Date of Birth:</label>
        <div>
          <input name="dob" type="date" onChange={onChangeHandler}/>
        </div>
       
        <lable>Ocupation:</lable>
        <div>
          <select name="ocupation" onChange={onChangeHandler}>
            <option value="Doctor">Doctor</option>
            <option value="Engineer">Engineer</option>
            <option value="Developer">Developer</option>
          </select>
        </div>
        
        <div>
          <label>Gender:</label>
          <div>
            <input type="radio" name="gender" value="Male" onChange={onChangeHandler}/>
            <label>Male</label>
          </div>
          <div>
            <input type="radio" name="gender" value="female" onChange={onChangeHandler}/>
            <label>Female</label>
          </div>
          <div>
            <input type="radio" name="gender" value="Other" onChange={onChangeHandler}/>
            <label>Other</label>
          </div>
        </div>

        <div>
          <button type="submit">Submit</button>
          <button >
            <Link to={"/"} style={{textDecoration:'none', color: "black"}}>Return to Home</Link>
          </button>
        </div>

      </form>
    </div>
  );
}

export default Add;
