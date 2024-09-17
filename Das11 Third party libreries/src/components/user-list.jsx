import Types from "prop-types"

export const UserList = ({age}) =>{
    return <>
    
        <h3>User list</h3>
        <p>How old are you {52}</p>
    
    </>
}

UserList.propTypes = {
    age:Types.number
}