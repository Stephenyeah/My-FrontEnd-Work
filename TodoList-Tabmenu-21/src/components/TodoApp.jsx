// TodoApp.jsx
import React, { useRef, useState } from 'react';
import TodoTable from "./TodoTable";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";
import './TodoApp.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';



function TodoApp() {
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

    const handleChangeDate = (date) => {
        setTodo({ ...todo, date: date.toISOString() });// Setting the date object directly
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

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    value={todo.date}
                    onChange={date => handleChangeDate(date)}
                    renderInput={(props) => <input type="text" {...props} />}
                />
             
            </LocalizationProvider>

            {/* <input
                type="date"
                value={todo.date}
                onChange={(e) => setTodo({ ...todo, date: e.target.value })}
            /> */}

            <button onClick={handleClick}>Add Todo</button>     
            <button onClick={handleDelete}>Delete</button>   
            
            <TodoTable todos={todos} gridRef={gridRef} />
        </div>
    );
}

export default TodoApp;
