export const ToDoItem = ({ todo, onUpdate, onDelete }) => {

    const handleDelete = () => {
        onDelete(todo.id)
    }

    return <div className={"todo " + (todo.completed ? "done" : "")}>
        <p>{todo.text}</p>

        <button onClick={() => onUpdate(todo.id)}>{todo.completed ? "CANCEL" : "COMPLETED"}</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
}

