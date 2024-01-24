import { useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";

export default function App() {
  
  const [todos, setTodos] = useState([]);

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo(id, completed){// * this completed
    setTodos(currentToDos=>{
      return currentToDos.map(todo=>{
      if(todo.id){
        return {...todo, completed} // (... seperates array) , this changes completed property of todo completed to completed passed ionto function *
        // this also makes a brand new to do, as todo.completed = completed wont work state is immutable
      }
      return todo
      })
    })
  }

  function deleteToDo(id){
    setTodos(currentToDos =>{
      return currentToDos.filter(todo => todo.id !== id)
    })
  }
  return (
    <> {/* how to comment in jsx*/}
      <NewTodoForm onSubmit={addTodo}/> {/*here we are creating props to pass to our component, our props is called on sumit and we are passing it addtodo*/}
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todos.length === 0 && "No Todos" } {/* && short circuiting, if todos lentgh = 0 returns strings no todos*/}
        {todos.map((todo) => {
          return (
            <li key={todo.id}> {/* add unique id to element to handle state in react*/}
              <label>
                <input type="checkbox" checked={todo.completed} onChange={e=> toggleTodo(todo.id, e.target.checked)}/> {/* this is a fucntion for each element*/}
                {todo.title}
              </label>
              <button onClick={() => deleteToDo(todo.id)} className="btn btn-danger">Delete</button> {/* if we dont have ()=> in on click it doesnt call the function deleteToDo() */}
            </li>
          )
        })}
      </ul>
    </>
  );
}
  