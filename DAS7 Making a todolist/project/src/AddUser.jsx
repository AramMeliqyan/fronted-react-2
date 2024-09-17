import { useRef, useState } from "react"



export const AddUser = ({ onAdd }) => {
    // const name = useRef()
    // const salary = useRef()
    const [user,setUser] = useState ({name:"",salary:80000})
    const [error,setError] = useState("")
    const handleSubmit = e => {
        e.preventDefault()
        onAdd({ name: user.name, salary: user.salary })
        setUser({ name: "", salary: 80000 })
        if(!user.name.trim()){
            return setError("please fil the field")
        }
        onAdd(user)
        setUser({name:"",salary:"80000"})
        setError("")
    }

    // const handleSumbit = e => {
    //     e.preventDefault()
    //     // console.log(nameRef.current.value,salary.current.value)
    //     onAdd({ name: name.current.value, salary: salary.current.value })
    //     name.current.value = ""
    //     salary.current.value = ""
    // }
    return <div>
        <h3>AddUser</h3>
        <form onSubmit={handleSubmit}>
            {error && <p style={{color:'red'}}>{error}</p>}
            <label>first name</label>
            <input  
            value={user.name}
            onChange={e=>setUser({...user,name:e.target.value})}/>
            <label>salary</label>
            <input 
            value={user.salary}
            onChange={e=>setUser({...user,salary:e.target.value})} />
            <button>save</button>
        </form>
    </div>
}
