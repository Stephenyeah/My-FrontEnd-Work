import { useState } from "react";

function TodoList() {
    const [todo, setTodo] = useState({
        description: "",
        date: ''
    });
    const [todos, setTodos] = useState([]);
    const [filter, setFilter] = useState('');

    
    const handleClick = () =>{
        if(todo.description && todo.date){
            setTodos([...todos,todo]);
            setTodo({ description:'', date:''});
            filteredTodos();
        }
        else{
            alert("Type a discription first");
        }
        
    }
    const handleDelete = (index) => {
        setTodos(todos.filter((todo,i) => i !==index
        ));
    }
    const filteredTodos = todos.filter(todo => {
        const descriptionMatch = todo.description.toLowerCase().includes(filter.toLowerCase());
        const dateMatch = todo.date.includes(filter);
        return descriptionMatch || dateMatch;
    });

    return(
        <>
            <br />
            <input 
                placeholder="Description"
                value={todo.description}
                onChange={e => setTodo({...todo, description: e.target.value})}
            />
            <input
                type="date"
                value ={todo.date}
                onChange ={e => setTodo({...todo, date: e.target.value})}
            />
            <button onClick={handleClick}>Add Todo</button>

 
            <table>
                <tbody>
                    {
                        todos.map((todo,index) => 
                            <tr key={index}>
                            <td>{todo.description}  </td>
                            <td> {todo.date}</td>
                            <td><button onClick={() => handleDelete(index)}>Delete</button></td>
                        </tr>
                         )
                    }
                </tbody>
            </table>

        </>
    );

}

export default TodoList;