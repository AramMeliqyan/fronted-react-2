export const ToDoItem = ({ todo, onUpdate }) => {
    return <div className={"todo " + (todo.completed ? "done" : "")}>
        <p>{todo.text}</p>
        <button>delete</button>
        <button onClick={() => onUpdate(todo.id)}>{todo.completed ? "CANCEL" : "COMPLETED"}</button>

    </div>
}


