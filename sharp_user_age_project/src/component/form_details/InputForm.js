import React from 'react';
import FormData from './FormData';

function InputForm(props){
    const changeDataSubmit=(newData)=>{
        props.changeState(newData);
    }
    return(
        <FormData changeDataSubmit={changeDataSubmit}/>
    )
}
export default InputForm;