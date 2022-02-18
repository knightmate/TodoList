import React from 'react';
import { Action ,Type} from '../../App';
import { Todo } from '../../model';

const TodoList = ({todoList,dispatch}:{todoList:Todo[],dispatch:React.Dispatch<Action>}) => {
    return (
        <div>
        {todoList.map((item)=>{
            return(<> <div>{item.todo}</div>
            <button onClick={()=>{
               dispatch({
                   type:Type.DELETE,
                   payload:item
               });
            }}>Delete</button>
            </>)

        })}
        </div>
    );
};

export default TodoList;