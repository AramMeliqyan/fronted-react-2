import { Link, useNavigate } from "react-router-dom"

export const AddUser = () =>{
    const navigate = useNavigate()
    const handleCreate = () => {
        navigate("/")

    }

    return <div>
        <h2>Add User</h2>
        {/* <a href="/">Home</a> */}
        <Link to = "/">Home</Link>
        <button onClick={handleCreate}>create</button>
    </div>
}