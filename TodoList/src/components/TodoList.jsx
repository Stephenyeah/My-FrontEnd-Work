import { useState } from "react";

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



    return(
        <div className="todo-container">
            <br />
            <div className="add-todo">Descritption: 
            <input 
                placeholder="Description"
                value={todo.description}
                onChange={e => setTodo({...todo, description: e.target.value})}
            />Date:
            <input
                type="date"
                value ={todo.date}
                onChange ={e => setTodo({...todo, date: e.target.value})}
            />
            <button onClick={handleClick}>  Add  </button>
            </div>
 
            <table>
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
                            
                           
                        </tr>
                         )
                    }
                </tbody>
            </table>

        </div>
    );

}

export default TodoList;