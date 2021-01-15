import React from "react";
import "./FormData.css";

function FormData(props) {
  //   console.log(props.location.state);
  if (props.location.state) {
    const { name, email, gender, department } = props.location.state;
    return (
      <div className="form-data">
        <p>Name : {name}</p>
        <p>Email : {email}</p>
        <p>Gender : {gender}</p>
        <p>Department : {department}</p>
      </div>
    );
  } else {
    return (
      <div className="form-data">
        <p>No data................</p>
      </div>
    );
  }
  //   );
}

export default FormData;
