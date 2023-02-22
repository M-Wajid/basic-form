import React from "react";
import { Link} from "react-router-dom";

const Edit = (props) => {
  let filteredArray = []; 

  const filter = (event) => {
    const temp1 = props.user.find((i)=>i.name === event.target.value)
    props.setTempData(temp1)
    console.log("this data is from edit");
    console.log(props.temp);
    filteredArray = props.user.filter((i) => i.name !== event.target.value);
    props.setUserData(filteredArray);
  }

  return (
    <div>
      <form>
        <select name="name" onChange={filter}>
          <option>default</option>
          {props.user.map((i) => ( 
            <option value={i.name}>{i.name}</option>
          ))}
        </select>
        <button>
          <Link to='/editPage'>
            Edit
          </Link>
        </button>
      </form>
      
    </div>
  );
};

export default Edit;
