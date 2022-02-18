import React, { ReducerAction, ReducerState, ReducerWithoutAction, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './Component/InputField/InputField';
import { Todo } from './model';
import { isReturnStatement } from 'typescript';
import TodoList from './Component/TodoList/TodoList';

enum Type {
  ADD = 'ADD',
  EDIT = 'EDIT',
  MARK_COMPLETE="MARK_COMPLETE",
  DELETE="DELETE"
} 

 export type Action={
   type:Type,
   payload:Todo
 }

const initialState:Todo[]=[]

const reducer=(preState:Todo[],Action:Action)=>{

 
    switch(Action.type){

      case Type.ADD:{
       console.log(Type.ADD+"---------")
        
       return [
         ...preState,
         Action.payload
       ];
      }
      case Type.DELETE:{
        console.log(Type.DELETE+"---------")
         
        return preState;
        
       }
     
       case Type.EDIT:{
        console.log(Type.EDIT+"---------")
        
        return preState;
       
       };

       case Type.MARK_COMPLETE:{
        console.log(Type.MARK_COMPLETE+"---------")
         
        return preState;
      }

    default : return preState;
    }

  

}

function App() {
    
  const [state,dispatch]=useReducer(reducer,initialState)
   
  return (
    <div className="App">

       <InputField onSearch={(event:React.FormEvent,inputText:string)=>{
        event.preventDefault();

         console.log("text",inputText);
          dispatch({
             type:Type.ADD,
             payload:{
               id:"",
               todo:inputText,
               isCompleted:false
             }
          })

       }}></InputField>

       <TodoList todoList={state} dispatch={dispatch}></TodoList>

    </div>
  );
}

export default App;
