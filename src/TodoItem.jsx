export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />{" "}
        {/* this is a fucntion for each element*/}
        {title}
      </label>
      <button onClick={() => deleteTodo(id)} className="btn btn-danger">
        Delete
      </button>{" "}
      {/* if we dont have ()=> in on click it doesnt call the function deleteTodo() */}
    </li>
  );
}
