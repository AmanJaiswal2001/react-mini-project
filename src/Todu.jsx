import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function ToduList(){
   let [todos ,setTodos]=useState([{task : "sample-task",id:uuidv4() ,isDone:false}]);//array of object//
let [newTodo,setNewTodo]=useState("");//input value
   
//add new todo//

   let addNewTask=()=>{
    setTodos((prevTodos)=>{
      return  [...prevTodos,{task: newTodo,id:uuidv4() ,isDone:false}];//destructure pass array value//
    });
        setNewTodo("");
};
//update new todo value//
   let updateTodoValue=(event)=>{
    setNewTodo(event.target.value);
   };
   //delete todo
   let deleteTodo=(id)=>{
setTodos((prevTodos)=>todos.filter((prevTodos)=>prevTodos.id != id));
   };
   //Convert upper case//
   let upperCaseAll=()=>{
    setTodos((todos)=>(
        todos.map((todo)=>{
            return{
                ...todo,
                task:todo.task.toUpperCase(),
            };
        })
    ));
    
   }
   //uppercaseone//
   let UpperCaseOne=(id)=>{
    setTodos((todos)=>
        todos.map((todo)=>{
            if(todo.id==id){
                return{
                    ...todo,
                    task:todo.task.toUpperCase(),
                };
            } else {
                return todo;
            }
           
        })
    );
    
   }
   let MarkasDone=(id)=>{
    setTodos((todos)=>
        todos.map((todo)=>{
            if(todo.id==id){
                return{
                    ...todo,
                    isDone:true,
                };
            } else {
                return todo;
            }
           
        })
    );

   }

   //markis done code//
   let markIsDoneAll=()=>{
    setTodos((todos)=>(
        todos.map((todo)=>{
            return{
                ...todo,
                isDone:true,
            };
        })
    ));
    
   }
   
    return(
        <>
        <h4> Add to task</h4>
        <input placeholder="enter a tasks" 
        value={newTodo}
        onChange={updateTodoValue} />
        <button onClick={addNewTask}>Add to Task!</button>
   <br></br> 
   <br></br>
   <br></br>    
   <h4>Todulist</h4> 
   <ul>
    {
        todos.map((todo)=>(  //arrray render map function ka use krte hai
       <li key={todo.id}>
       <span style={todo.isDone?{textDecorationLine:"line-through"}:{}}>
       
       {todo.task}</span>
       <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
       {/* //arro fun ka use hm code ko execute nhi krte hai code ki copy deta with some argument ke sath// */}
   {/* <button onClick={()=>UpperCaseOne(todo.id)}>UpperCase One</button>*/}
   <button onClick={()=>MarkasDone(todo.id)}>MarkasDone</button> 

       </li>
    ))}
   </ul>
   
   {/* <button onClick={upperCaseAll}>Upper case</button>*/}
   <button onClick={markIsDoneAll}>markIsDoneAll</button> 
    </>
    );
}