import React from 'react';
import './TodoItem.css';

const TodoItem = ({ todo }) => {
    return (
        <div className="todo-item">
            <p>{todo.text}</p>
            {/* Add buttons or functionality to handle updating or deleting todos */}
        </div>
    );
};

export default TodoItem;
