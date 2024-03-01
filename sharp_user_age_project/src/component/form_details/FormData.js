import React, { useState , useRef } from "react";
import "./FormData.css";
import Button from "./Button";
import ErrorPop from "../ErrorMassage/ErrorPop";

function FormData(props) {
  const collageInput = useRef();
  const nameInput = useRef();
  const ageInput = useRef();


  const [showError, setShowError] = useState(false);

  const[errorMsg,seterrorMsg] = useState("")

  const errorPopHandle=()=>{
    setShowError((prevState) => {
      return !prevState;
    });
  }



  const handleSubmit = (event) => {
    event.preventDefault();
    if(nameInput.current.value === "" && ageInput.current.value === "" && collageInput.current.value ===""){
      seterrorMsg("invalid name! OR invalid Age! OR invalid collage");
      setShowError((prevState) => {
        return !prevState;
      });
    }
    else if (nameInput.current.value === "") {
      seterrorMsg("invalid name!");
      setShowError((prevState) => {
        return !prevState;
      });
    }
    else if(ageInput.current.value === "" || +ageInput.current.value<1){
      seterrorMsg("invalid Age!");
      setShowError((prevState) => {
        return !prevState;
      });
    }
    else if(collageInput.current.value===""){
      seterrorMsg("invalid collage name!");
      setShowError((prevState) => {
        return !prevState;
      });
    }
     else {
      let newData = {
        name: nameInput.current.value,
        age: ageInput.current.value,
        collage:collageInput.current.value
      };

      props.changeDataSubmit(newData);

      nameInput.current.value="";
      ageInput.current.value="";
      collageInput.current.value="";
    }
  };

  return (
    <>
      {showError ? <ErrorPop errormsg={errorMsg} errorPopHandle={errorPopHandle} /> : null}
      <form className="form-control" onSubmit={handleSubmit}>
        <div>
          <label>username</label>
          <input type="text" ref={nameInput}/>
          <label>Age(years)</label>
          <input type="number" ref={ageInput}/>
          <label>collage</label>
          <input type='text' ref={collageInput}/>
        </div>
        <Button>add details</Button>
      </form>
    </>
  );
}
export default FormData;
