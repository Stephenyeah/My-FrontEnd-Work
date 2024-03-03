// App.js
import React, { useState } from "react";
import TodoTable from "./components/TodoTable";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";


function App() {
    const [todo, setTodo] = useState({
        description: "",
        date: "",
        priority: ""
    });
    const [todos, setTodos] = useState([]);

    const handleClick = () => {
        if (todo.description && todo.date) {
            setTodos([...todos, todo]);
            setTodo({ description: "", date: "", priority: "" });
        } else {
            alert("Type a description first");
        }
    };

<<<<<<< Updated upstream
  return (
    <>
      
      
      <TodoList />
    </>
  )
=======
    const handleDelete = (index) => {
        setTodos(todos.filter((todo, i) => i !== index));
    };

    return (
        <>
            <br />
            <input
                placeholder="Description"
                value={todo.description}
                onChange={(e) => setTodo({ ...todo, description: e.target.value })}
            />
            <input
                placeholder="Priority"
                value={todo.priority}
                onChange={(e) => setTodo({ ...todo, priority: e.target.value })}
            />
            <input
                type="date"
                value={todo.date}
                onChange={(e) => setTodo({ ...todo, date: e.target.value })}
            />

            <button onClick={handleClick}>Add Todo</button>

            <TodoTable todos={todos} handleDelete={handleDelete} />
        </>
    );
>>>>>>> Stashed changes
}

export default App;
