import React from 'react';
import { useState } from 'react';
import './App.css';
import InputForm from './component/form_details/InputForm.js';
import UserList from './component/User_List_components/UserList.js';

let userData = [{ name: "raja", age: 21 }];

function App() {

  const [Data, setData] = useState(userData);

  const changeState = (newData) => {
    setData((prevState) => {
      let updatedData = [...prevState];
      updatedData.unshift(newData)
      return updatedData;
    })
  };

  return (<>
    <div className='main_container'>
      <InputForm changeState={changeState} />
      <UserList userData={Data} />
    </div>
    </>);
}

export default App;
