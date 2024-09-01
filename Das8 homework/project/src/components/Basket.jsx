import { BasketItem } from "./BasketItem"

export const Basket = ({cart,onAdd,onNoun,onRemove,total})=>{
    return <div className="col-md-5">
        
    <table className="table table-dark table-bordered">

        <thead>
            <tr>
            <th>product</th>
            <th>price</th>
            <th>count</th>
            <th>subtotal</th>
            <th>actions</th>

            </tr>


            
        </thead>

        <tbody>
            {
                cart.map(elm=><BasketItem key={elm.id}{...elm} onAdd={onAdd} onNoun = {onNoun} onRemove = {onRemove}/>)
            }

        </tbody>
    </table>
    <h2> Total {total} AMD</h2>
    </div>
}

