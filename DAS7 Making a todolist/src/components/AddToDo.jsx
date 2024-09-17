import { useState } from "react"

export const AddToDo = ({ onAdd }) => {
    
    const [text, setText] = useState("")


    const handleSumbit = event => {
        event.preventDefault()
        if (text.trim()) {
            onAdd(text)
            setText("")
        }
    }


    return <>


        <h3>AddToDo</h3>


        <form onSubmit={handleSumbit}>

            <input
                type="text"
                value={text}
                onChange={event => setText(event.target.value)}
            />

            <button>sumbit</button>

        </form>

    </>
}