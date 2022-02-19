import React from 'react';
import { Action ,Type} from '../../App';
import { Todo } from '../../model';
import TodoItem from '../TodoItem/TodoItem';
import  image from '../../Asset/TodoItem3.jpg';
const TodoList = ({todoList,dispatch}:{todoList:Todo[],dispatch:React.Dispatch<Action>}) => {
    return (
        <div className="container"> 
        <div className="todo_list_active_task">
            <span className="todo_list_header">Active Task</span>
        {todoList.map((item)=>{
            return(
                <TodoItem itemData={item} dispatch={dispatch}></TodoItem>
              )

        })}
        </div>
         
         <div className="todo_list_completed_task" >
         <span className="todo_list_header"  >Completed Task</span>
        {todoList.forEach((item)=>{
            if(item.isCompleted){

            return(
                <TodoItem itemData={item} dispatch={dispatch}></TodoItem>
              )
            }

        })}
         </div>
        </div>
    );
};

export default TodoList;