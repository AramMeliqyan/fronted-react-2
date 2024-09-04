import { useContext } from "react"
import { ToDoContext } from "../context"

export const FilterToDo = () => {
    const { currentFilter, onSet } = useContext(ToDoContext)
    const list = ["all", "completed", "active"]

    return <>

        {list.map((criteria, i) => <button onClick={() => onSet(criteria)} key={i} className={currentFilter == criteria ? "button-active" : null}>
            {criteria}
        </button>)
        }
    </>
}