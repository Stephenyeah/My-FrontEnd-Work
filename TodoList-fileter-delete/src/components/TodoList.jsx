import { useState } from "react";
import '../App.css';
import './TodoList.css';

function TodoList() {
    const [todo, setTodo] = useState({
        description: "",
        date: ''
    });
    const [todos, setTodos] = useState([]);

    
    const handleClick = () =>{
        if(todo.description && todo.date){
            setTodos([...todos,todo]);
            setTodo({ description:'', date:''});

        }

        else{
            alert("Type a discription first");
        }
        
    }
    const handleDelete = (index) =>{
        setTodos(todos.filter((todo,i) => i !==index));
        
    }



    return(
        
        <div className="todoList">
            <br />
            <div className="input"><span>Descritption: </span>
            <input 
                placeholder="Description"
                value={todo.description}
                onChange={e => setTodo({...todo, description: e.target.value})}
            /><span>Date:</span>
            <input
                type="date"
                value ={todo.date}
                onChange ={e => setTodo({...todo, date: e.target.value})}
            />
            <button onClick={handleClick}>  Add  </button>
            </div>
 
            <table className="table table-striped">
            <thead>
                <tr>
                <th>Date</th>
                <th>Description</th>
                </tr>
            </thead>
                <tbody>
                    {
                        todos.map((todo,index) => 
                            <tr key={index}>
                           <td> {todo.date}</td>
                            <td>{todo.description}</td>
                            <td><button className="btn btn-danger" onClick={() => handleDelete(index)}>Delete</button></td>
                           
                        </tr>
                         )
                    }
                </tbody>
            </table>

        </div>
    );

}

export default TodoList;