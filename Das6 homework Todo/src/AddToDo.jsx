import React, { useState } from 'react';

const AddToDo = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addTodo(text);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="form-inline justify-content-center mb-4">
            <input 
                type="text" 
                className="form-control mr-2"
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                placeholder="Add a new todo" 
            />
            <button type="submit" className="btn btn-success">Add</button>
        </form>
    );
};

export default AddToDo;
