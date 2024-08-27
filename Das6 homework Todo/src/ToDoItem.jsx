import React from 'react';

const ToDoItem = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <li className={`list-group-item d-flex justify-content-between align-items-center`}>
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <div>
                <button onClick={() => toggleComplete(todo.id)}>
                    {todo.completed ? 'Cancel' : 'Complete'}
                </button>
                <button onClick={() => deleteTodo(todo.id)}>
                    Delete
                </button>
            </div>
        </li>
    );
};

export default ToDoItem;
