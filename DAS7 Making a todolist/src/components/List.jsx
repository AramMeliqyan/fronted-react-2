import { ToDoItem } from "./ToDoItem"

export const List = ({ todos, onUpdate, currentFilter }) => {

    let filtered = todos
    if (currentFilter == 'active') {
        filtered = todos.filter(a => !a.completed)
    } else if (currentFilter == 'completed') {
        filtered = todos.filter(a => a.completed)
    }
    return <>
        <p>showing: <strong>{currentFilter}</strong></p>



        {
            filtered.map(todo => <ToDoItem
                key={todo.id}
                todo={todo}
                onUpdate={onUpdate}

            />)
        }

    </>
}