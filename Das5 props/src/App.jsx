import { useState } from 'react'
import './App.css'
import { ProductList } from './components/ProductList'
import { Basket } from './components/Basket'

function App() {

 const [products,setProducts] = useState([
{id:100,name:"Asics resolution",price:32,photo:"https://i.sportisimo.com/products/images/1573/1573914/700x700/asics-gel-resolution-9-gs_6.jpg"},
{id:101,name:"Asics Running",price:42,photo:"https://apim.marks.com/v1/product/api/v1/product/image/77985176f?baseStoreId=MKS&lang=en_CA&subscription-key=c01ef3612328420c9f5cd9277e815a0e&imwidth=640&impolicy=mZoom"},
{id:102,name:"Puma Rs-X2",price:52,photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/391932/01/sv01/fnd/DFA/fmt/png/RS-X-Efekt-Archive-Remastered-Sneakers" },
{id:103,name:"Puma Rs-X3",price:62,photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/394981/01/sv01/fnd/PNA/fmt/png/RS-X-Faded-Daytona-Sneakers"},
{id:104,name:"Puma Rs-X4",price:62,photo:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/385754/01/sv03/fnd/PNA/fmt/png/RS-X-Halves-Sneakers"},
{id:105,name:"Puma Rs-X5",price:72,photo:"https://en-ae.sssports.com/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dw2fca6377/sss/SSS2/P/M/3/9/3/SSS2_PM39347321_4099686381905_1.jpg?sw=400&sh=400&sm=fit"}
 ])

 const [basket,setBasket] = useState([])

 const moveToCart = id => {
  let found = products.find(x => x.id === id)
  let inBasket = basket.find(item => item.id === id)
  
  if (inBasket) {
    setBasket(basket.map(item =>
      item.id === id ? {...item, count: item.count + 1} : item
    ))
  } else {
    setBasket([...basket, {...found, count: 1}])
  }
}

const removeToCart = id => {
  setBasket(basket.filter(elm => elm.id!== id))
}



  return (
    <div className='row'>
    <h1>Online Shop</h1>
      <ProductList
      items = {products}
      onMove = {moveToCart}
      />
      <Basket
      cart = {basket}
      onDelete = {removeToCart}
      />
    </div>
  )
}

export default App
