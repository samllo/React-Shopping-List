import { useEffect, useState } from "react";
import "./styles.css";
import { NewTodoForm } from "./NewTodoForm";
import { TodoList } from "./TodoList";

export default function App() {

  // hooks must be called at top of function
  const [todos, setTodos] = useState(()=>{
    // checks local stroage and hgets value if exists 
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null)return[]
     return JSON.parse(localValue);
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos));// set items property to json strigifid version of our todos
  }, [todos]); // every time our todos change run this code 

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    // * this completed
    setTodos((currentToDos) => {
      return currentToDos.map((todo) => {
        if (todo.id) {
          return { ...todo, completed }; // (... seperates array) , this changes completed property of todo completed to completed passed ionto function *
          // this also makes a brand new to do, as todo.completed = completed wont work state is immutable
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentToDos) => {
      return currentToDos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      {" "}
      {/* how to comment in jsx*/}
      <NewTodoForm onSubmit={addTodo} />{" "}
      {/*here we are creating props to pass to our component, our props is called on sumit and we are passing it addtodo*/}
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
