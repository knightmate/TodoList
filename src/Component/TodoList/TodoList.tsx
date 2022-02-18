import React from 'react';
import { Action ,Type} from '../../App';
import { Todo } from '../../model';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({todoList,dispatch}:{todoList:Todo[],dispatch:React.Dispatch<Action>}) => {
    return (
        <div>
        {todoList.map((item)=>{
            return(
                <TodoItem itemData={item} dispatch={dispatch}></TodoItem>
            )

        })}
        </div>
    );
};

export default TodoList;