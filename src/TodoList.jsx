import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Todos"}{" "}
      {/* && short circuiting, if todos lentgh = 0 returns strings no todos*/}
      {todos.map((todo) => {
        return (
          <TodoItem
          {...todo} 
          key={todo.id}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          // spread out our todo props works the same as the code commented out below
            // completed={todo.completed}
            // id={todo.id}
            // title={todo.title}
            
          /> 
        );
      })}
    </ul>
  );
}
