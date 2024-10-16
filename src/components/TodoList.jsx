import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState({});

  function handleAdd(todo) {
    setTodos({ ...todos, [todo.id]: todo });
  }

  function handleDelete(id) {
    const { [id]: _, ...rest } = todos;
    setTodos(rest);
  }

  return (
    <div className="text-center">
      <form
        className="text-center container input-group my-4 h-4 w-25"
        onSubmit={(e) => {
          e.preventDefault();
          handleAdd({ id: Date.now(), text: e.target.elements.todo.value });
        }}
      >
        <input
          type="text"
          className="form-control"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          name="todo"
        />
        <button
          className="btn btn-sm btn-primary"
          type="submit"
          id="button-addon2"
        >
          ADD
        </button>
      </form>
      <ul className="text-start mx-auto w-25 list-group list-group-numbered">
        {Object.values(todos).map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.text}
            <button
              className="btn btn-sm btn-danger ms-3"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
