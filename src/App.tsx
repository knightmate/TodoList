import React, { ReducerAction, ReducerState, ReducerWithoutAction, useReducer } from 'react';
import logo from './logo.svg';
import './App.css';
import InputField from './Component/InputField/InputField';
import { Todo } from './model';
import { isReturnStatement } from 'typescript';
import TodoList from './Component/TodoList/TodoList';

export enum Type {
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
         
      const updatedState=preState.filter((item)=>item.id!==Action.payload.id)

        return [
         ...updatedState
        ];
        
       }
     
       case Type.EDIT:{
        console.log(Type.EDIT+"---------")
      const updateState=  preState.map((item)=>{
             if(item.id==Action.payload.id){
               item.todo=Action.payload.todo
               return item;
             }
             return item;
        })
        return[
          ...updateState
        ]
       
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
     <div style={{display:"flex",justifyContent:'center'}}>      
        <InputField onSearch={(event:React.FormEvent,inputText:string)=>{
        event.preventDefault();

         console.log("text",inputText);
          dispatch({
             type:Type.ADD,
             payload:{
               id:Date.now().toString(),
               todo:inputText,
               isCompleted:false
             }
          })

       }}></InputField>
       </div>

       <TodoList todoList={state} dispatch={dispatch}></TodoList>

    </div>
  );
}

export default App;
