export const BasketItem = ({id,name,price,count,onAdd,onNoun,onRemove})=>{

    return<>
    <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{count*price}</td>
        <td>
            <button onClick={()=>onAdd(id)} className="btn btn-outline-success">+</button>
            <button onClick={()=>onNoun(id)} className="btn btn-warning">-</button>
            <button onClick={()=>onRemove(id)} className="btn btn-danger">X</button>
        </td>
    </tr>

    
    </>
}