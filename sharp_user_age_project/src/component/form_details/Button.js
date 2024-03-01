import React from 'react';
import './Button.css';

function Button(props){
    return (
        <button type='submit' className='submitButton' onClick={props.onClick} >{props.children} </button>
    )
}
export default Button;