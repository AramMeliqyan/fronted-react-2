import { BasketItem } from "./BasketItem"

export const Basket = ({cart,onAdd,onNoun,onRemove})=>{
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
           
        </tbody>
    </table>
    </div>
}

