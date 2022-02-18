import React from 'react';

interface Props{
    onSearch:(event:React.FormEvent,input:string)=>void;
}
const InputField=({onSearch}:Props) => {
    const [inputText,setInputText]=React.useState<string>("");
    return (
      <form onSubmit={(event:React.FormEvent)=>{
          setInputText("");
          onSearch(event,inputText);
      }}>
        <input 
        value={inputText}
        onChange={(event)=>{
         const text=  event.target.value;
          setInputText(text);
        }}
        type="text"></input>
       <button  type="submit">GO</button>
      </form>
    );
};

export default InputField;