import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './Component/InputField/InputField';

function App() {
  return (
    <div className="App">

       <InputField onSearch={(event:React.FormEvent,inputText:string)=>{
        event.preventDefault();
        
         console.log("text",inputText);
        

       }}></InputField>

    </div>
  );
}

export default App;
