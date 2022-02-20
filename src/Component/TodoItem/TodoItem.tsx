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

    /**
     * 
     *Animattion is implement for adding todo-which is top-down now 
     on every delete or completed task we need to customize the animation of css
     
     refer- https://www.youtube.com/watch?v=r61mCFu7uTM&t=3826s
     we need to build fadable component and render every item through fadable component
     */

//`url(${image})`
    return (
        <>
        <form className={'animated animatedFadeOutUp fadeOutUp todo_item_form'} style={{backgroundImage:`url(https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?ext=jpg&size=626)`}}   onSubmit={(event:React.FormEvent)=>{
           
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