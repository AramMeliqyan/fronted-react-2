import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { Child } from './Child'

function App() {
  const [count,setCount] = useState(0)
const [products,setProducts] = useState([])


useEffect(()=>{
  fetch("https://fakestoreapi.com/products")
  .then(resp =>resp.json())
  .then(data=>
    // console.log(data)
    setProducts(data)
  )
},[count])


const remove = id =>{
  setProducts(products.filter(x=>x.id != id))
}


  return (
    <>
<h1>{count}</h1>
<button onClick={()=>setCount(count+1)}>UP</button>

{
  products.map(p=><Child key={p.id} id = {p.id} onRemove = {remove}/>)
}


    <p>count {products.length}</p>
    </>
  )
}

export default App
