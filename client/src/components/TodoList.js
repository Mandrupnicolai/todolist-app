import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetchTodos();
    }, []);

    const fetchTodos = async () => {
        const response = await axios.get('/api/todos');
        setTodos(response.data);
    };

    const addTodo = async (text) => {
        const newTodo = { id: Date.now().toString(), text, completed: false };
        await axios.post('/api/todos', newTodo);
        fetchTodos(); // Refresh the list
    };

    const updateTodo = async (id, updatedFields) => {
        await axios.put(`/api/todos/${id}`, updatedFields);
        fetchTodos(); // Refresh the list
    };

    const deleteTodo = async (id) => {
        await axios.delete(`/api/todos/${id}`);
        fetchTodos(); // Refresh the list
    };

    return (
        <div className="todo-list">
            {todos.map((todo, index) => (
                <TodoItem key={index} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            ))}
            {/* Add form or button here to add a todo */}
        </div>
    );
};

export default TodoList;
