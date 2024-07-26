// src/App.tsx
import React, { useState } from 'react';
import './App.css';

function App() {
    const [todos, setTodos] = useState<any>([]);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        setTodos([...todos, { text: newTodo, completed: false }]);
        setNewTodo('');
    };

    const toggleTodo = (index: number) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    return (
        <div className="App">
            <h1>Todo List</h1>
            <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((todo: any, index: number) => (
                    <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                        <span onClick={() => toggleTodo(index)}>{todo.text}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
