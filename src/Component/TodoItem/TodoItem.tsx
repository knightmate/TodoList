import React from 'react';
import { Action ,Type} from '../../App';
import { Todo } from '../../model';
import './styles.css';
import { AiFillEdit  ,AiOutlineDelete,AiOutlineCheck} from "react-icons/ai";

interface Props{    
  itemData:Todo    
  dispatch:React.Dispatch<Action>
}

const TodoItem =({itemData,dispatch}:Props)=> {
    const [isEdit,setEdit]=React.useState(false);
    const [editData,seteditData]=React.useState("");


//`url(${image})`
    return (
        <>
        <form style={{backgroundImage:`url(https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?ext=jpg&size=626)`}} className='todo_item_form' onSubmit={(event:React.FormEvent)=>{
           
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
            <input
           className='todo_item_title'
            value={editData} onChange={(event)=>{
                const val=event.target.value;
                
                seteditData(val);
            }}></input>
          ):(
            <span className="todo_item_title">{itemData.todo}</span>
          )
          }
          
          {/* <button type="button" onClick={()=>{
              setEdit(true);
              seteditData(itemData.todo);
          }}>Edit</button>
          <button>Delete</button> 
          <button>MarkDone</button> */}

       <div>
        <AiFillEdit cursor="pointer" color='black' style={{margin:"2px"}} size="20px" onClick={()=>{
              setEdit(true);
              seteditData(itemData.todo);
          }}></AiFillEdit>


        <AiOutlineDelete cursor="pointer" color="black"  style={{margin:"2px"}} size="20px"
        onClick={()=>{
            dispatch({
                type:Type.DELETE,
                payload:itemData
            })
        }}
        ></AiOutlineDelete>
        <AiOutlineCheck cursor="pointer" color="black" style={{margin:"2px"}} size="20px"
        onClick={()=>{
            dispatch({
                type:Type.MARK_COMPLETE,
                payload:itemData
            })
        }}
        ></AiOutlineCheck>

       </div>
        </form>
         
    </>
    );
};

export default TodoItem;