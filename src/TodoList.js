import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodos] = useState("");

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, { text: newTodo.trim(), checked: false }]);
            setNewTodos("");
        }
    }

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1)
        setTodos(newTodos);
    }
    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].checked = !newTodos[index].checked
        setTodos(newTodos)
    }

    return (
        <div className="col-12">
            <div className="d-inline-flex gap-2 form-group mx-sm-3 mb-2">
                <input type="text" className="form-control" id="addTask" value={newTodo} onChange={(e) => setNewTodos(e.target.value)} placeholder="Enter Your Task" />
                <button onClick={addTodo} className="btn btn-primary">Add</button>
        </div>
        <div className="col-12">
            <div className="d-flex justify-content-center align-items-center gap-3 todo">
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index} className="d-flex">
                            <div className="d-flex align-items-center justify-content-start">
                                <input type="checkbox" checked={todo.checked} onChange={() => toggleTodo(index)} />
                                <span style={{ marginRight: "10px", textDecoration: todo.checked ? "line-through" : "none", }}>
                                    {todo.text}
                                </span>
                            </div>
                            <button onClick={() => deleteTodo(index)} className="my-2 btn btn-danger">Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    )
}

export default TodoList