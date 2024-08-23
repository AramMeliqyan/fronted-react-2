export const BasketItem = ({id,name,price,count})=>{

    return<>
    <tr>
        <td>{name}</td>
        <td>{price}</td>
        <td>{count}</td>
        <td>{count*price}</td>
        <td></td>
    </tr>

    
    </>
}