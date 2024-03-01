import React from 'react';
import './ErrorPop.css';
import Button from '../form_details/Button';

function ErrorPop(props) {
    return (<>
    <div className='backDrop' onClick={props.errorPopHandle}/>
        <div className='errorPopBox'>
            <h2>Error</h2>
            <p>{props.errormsg} </p>
            <div className='errorButton'><Button onClick={props.errorPopHandle}>ok</Button></div>
        </div>
        </>
    )
}
export default ErrorPop;