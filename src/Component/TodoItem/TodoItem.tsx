import React from 'react';
import { Action ,Type} from '../../App';
import { Todo } from '../../model';

interface Props{
    
  itemData:Todo    
  dispatch:React.Dispatch<Action>
}
const TodoItem =({itemData,dispatch}:Props)=> {
    const [isEdit,setEdit]=React.useState(false);
    const [editData,seteditData]=React.useState("");

    return (
        <form onSubmit={(event:React.FormEvent)=>{
           
           event.preventDefault();
           setEdit(false);
            dispatch({
                type:Type.EDIT,
                payload:{
                    ...itemData,
                    todo:editData
                }
            });
        }}>
          {
          isEdit?(
            <input value={editData} onChange={(event)=>{
                const val=event.target.value;
                seteditData(val);
            }}></input>
          ):(
            <span style={{margin:"15px"}}>{itemData.todo}</span>
          )
          }

          <button type="button" onClick={()=>{
              setEdit(true);
              seteditData(itemData.todo);
          }}>Edit</button>
          <button>Delete</button> 
          <button>MarkDone</button>
        </form>
    );
};

export default TodoItem;