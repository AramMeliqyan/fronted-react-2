export const Basket = ({ cart,onDelete }) => {

    return <div className="col-md-5">
        <h3>items:{cart.length}</h3>
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
                    cart.map(elm => <tr key={elm.id}>
                        <td>{elm.name}</td>
                        <td>{elm.price}</td>
                        <td>{elm.count}</td>
                        <td>{elm.price*elm.count}</td>
                        <td>
                            <button onClick={()=>(onDelete(elm.id))}>remove</button>
                        </td>

                    </tr>)
                }

            </tbody>

        </table>
    </div>
}

