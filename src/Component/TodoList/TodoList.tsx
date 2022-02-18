import React from 'react';
import { Action } from '../../App';
import { Todo } from '../../model';

const TodoList = ({todoList,dispatch}:{todoList:Todo[],dispatch:React.Dispatch<Action>}) => {
    return (
        <div>
        {todoList.map((item)=>{
            return <div>{item.todo}</div>
        })}
        </div>
    );
};

export default TodoList;