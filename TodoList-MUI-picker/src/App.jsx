// App.jsx
import React, { useRef, useState } from 'react';
import TodoTable from "./components/TodoTable";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import { AgGridReact } from "ag-grid-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/TodoTable.css';

function App() {
    const [todo, setTodo] = useState({
        description: "",
        date: "",
        priority: ""
    });
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const handleClick = () => {
        if (todo.description && todo.date) {
            setTodos([...todos, todo]);
            setTodo({ description: "", date: "", priority: "" });
        } else {
            alert("Type a description first");
        }
    };
    
    const handleDelete = () => {
        if (gridRef.current.getSelectedNodes().length > 0) {
            const selectedId = parseInt(gridRef.current.getSelectedNodes()[0].id);
            setTodos(todos.filter((_, index) => index !== selectedId));
        } else {
            alert('Select a row first!');
        }
    };

    return (
        <div className="todoList">
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
            <button onClick={handleDelete}>Delete</button>   
            
            <TodoTable todos={todos} gridRef={gridRef} />
        </div>
    );
}

export default App;
