import React from 'react';
import ToDoItem from './ToDoItem';

const List = ({ todos, toggleComplete, deleteTodo }) => {
    return (
        <ul className="list-group">
            {todos.map((todo) => (
                <ToDoItem 
                    key={todo.id} 
                    todo={todo} 
                    toggleComplete={toggleComplete} 
                    deleteTodo={deleteTodo} 
                />
            ))}
        </ul>
    );
};

export default List;
