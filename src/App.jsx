import { useState } from "react";
import "./styles.css";

export default function App() {
  const [newItem, setNewItem] = useState(""); // array destructuring

  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault(); // stop refreshing
    setTodos((currentToDos) => {
      return [
        ...currentToDos,
        { id: crypto.randomUUID(), title: newItem, completed: false }, ///generating a unique identifier (UUID)
      ];
    });
    setNewItem("")
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
      <form onSubmit={handleSubmit} className="new-item-form"> 
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          ></input>
        </div>
        <button className="btn"> Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {todo.length === 0 && "No Todos" } {/* && short circuiting, if todos lentgh = 0 returns strings no todos*/}
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
  