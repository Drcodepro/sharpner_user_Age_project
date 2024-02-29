import React, { useState } from 'react';
import './FormData.css'
import Button from './Button';
function FormData(props){

const [nameData,setName]=useState('');
const[ageData,setAge] = useState('');

const handleAgeInput=(event)=>{
  setAge(event.target.value);
}
const handleNameInput=(event)=>{
  setName(event.target.value);
}

  const handleSubmit=(event)=>{
    event.preventDefault();
    let newData ={
      name:nameData,
      age:ageData
    }
    props.changeDataSubmit(newData)
    setAge('');
    setName('');
  }

    return( <form className='form-control' onSubmit={handleSubmit}>
        <div>
          <label>username</label>
          <input type="text" value={nameData} onChange={handleNameInput} />
          <label>Age(years)</label>
          <input type="number" value={ageData} onChange={handleAgeInput}/>
        </div>
         <Button/>
      </form>)
}
export default FormData;