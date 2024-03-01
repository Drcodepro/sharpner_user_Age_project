import React, { useState } from "react";
import "./FormData.css";
import Button from "./Button";
import ErrorPop from "../ErrorMassage/ErrorPop";

function FormData(props) {
  const [nameData, setName] = useState("");
  const [ageData, setAge] = useState("");
  const [showError, setShowError] = useState(false);

  const[errorMsg,seterrorMsg] = useState("")

  const handleAgeInput = (event) => {
    setAge(event.target.value);
  };
  const handleNameInput = (event) => {
    setName(event.target.value);
  };

  const errorPopHandle=()=>{
    setShowError((prevState) => {
      return !prevState;
    });
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    if(nameData === "" && ageData === ""){
      seterrorMsg("invalid name! OR invalid Age!");
      setShowError((prevState) => {
        return !prevState;
      });
    }
    else if (nameData === "") {
      seterrorMsg("invalid name!");
      setShowError((prevState) => {
        return !prevState;
      });
    }
    else if(ageData === ""){
      seterrorMsg("invalid Age!");
      setShowError((prevState) => {
        return !prevState;
      });
    }
     else {
      let newData = {
        name: nameData,
        age: ageData,
      };
      props.changeDataSubmit(newData);
      setAge("");
      setName("");
    }
  };

  return (
    <>
      {showError ? <ErrorPop errormsg={errorMsg} errorPopHandle={errorPopHandle} /> : null}
      <form className="form-control" onSubmit={handleSubmit}>
        <div>
          <label>username</label>
          <input type="text" value={nameData} onChange={handleNameInput} />
          <label>Age(years)</label>
          <input type="number" value={ageData} onChange={handleAgeInput} />
        </div>
        <Button>add details</Button>
      </form>
    </>
  );
}
export default FormData;
