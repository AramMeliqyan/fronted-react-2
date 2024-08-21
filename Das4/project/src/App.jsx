// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [products, setProducts] = useState([
//     { id: 101, name: "Psychology", price: 27000, pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_545/dk-core-nonprod/9780744091960/9780744091960_cover.jpg" },
//     { id: 101, name: "Philosopy", price: 56000, pic: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9780744091960/9780744091960_cover.jpg" },
//     { id: 101, name: "Economics", price: 60000, pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_545/dk-core-nonprod/9780756698270/9780756698270_cover.jpg" },
//     { id: 101, name: "Religion", price: 70000, pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_545/dk-core-nonprod/9781465408433/9781465408433_cover.jpg" },
//     { id: 101, name: "Literature", price: 80000, pic: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9781465491015/9781465491015_cover.jpg" }
//   ]);

//   const [basket,setBasket]= useState([

//   ])

//   const moveTOCart = prod =>{
//     console.log(prod)
//   }


//   return (
//     <>
//       <h1>online shop</h1>

//       <div className="content">
//         <div>
//           <h3>Products</h3>
//           <div className="list">
//             {
//               products.map(prod=><div key={prod.id}>
//                 <img src="{prod.pic}"/>
//                 <p>{prod.name}</p>
//                 <strong>{prod.price}</strong>
//                 <button>move</button>
//               </div>)
//             }
//           </div>
//         </div>

//         <div>
//           <h3>Cart</h3>

//           <table>
//             <thead>
//               <tr>
//                 <th>id</th>
//                 <th>price</th>
//                 <th>count</th>
//                 <th>subtotal</th>
//                 <th>actions</th>
//               </tr>
//             </thead>
//             <tbody>
//             {
//               basket.map(item=> <tr key={item.id}>
//                 <td>{item.name}</td>
//                 <td>{item.price}</td>
//                 <td>{item.count}</td>
//                 <td>{item.count*item.price}</td>
//                 <td></td>

//               </tr>)
//             }

//             </tbody>
//           </table>
//         </div>

//       </div>
//     </>
//   )
// }

// export default App


import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [products, setProducts] = useState([
    { id: 101, name: "Psychology", price: 27000, pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_545/dk-core-nonprod/9780744091960/9780744091960_cover.jpg" },
    { id: 102, name: "Philosophy", price: 56000, pic: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9780744091960/9780744091960_cover.jpg" },
    { id: 103, name: "Economics", price: 60000, pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_545/dk-core-nonprod/9780756698270/9780756698270_cover.jpg" },
    { id: 104, name: "Religion", price: 70000, pic: "https://res.cloudinary.com/dk-hub/image/upload/q_75,c_limit,f_auto,w_1439,h_545/dk-core-nonprod/9781465408433/9781465408433_cover.jpg" },
    { id: 105, name: "Literature", price: 80000, pic: "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9781465491015/9781465491015_cover.jpg" }
  ]);

  const [basket, setBasket] = useState([]);



  const moveToCart = prod => {
    const result = basket.find(x => x.id == prod.id)
    if(result){
      result.count++
      setBasket([...basket])
    }else{
      setBasket([...basket,{...prod,count:1}])
    }
  }

  const addCountProd = prod =>{
    const result = basket.find(x => x.id == prod.id )
    if(result){
      result.count++
      setBasket([...basket])
    }else{
      setBasket([...basket,{...prod,count:1}])
    }
  }


  const subCountProd = prod =>{
    const result = basket.find(x => x.id == prod.id )
    
    if(result && prod.count > 1){
      result.count--
      setBasket([...basket])
    }else{
      setBasket([...basket])
    }
  }

  const delProd = id => {
    setBasket(basket.filter(elm => elm.id !== id))
  }


  
  // const subCountProd = id => {
  //   setBasket(basket.map(elm => elm.id == id && elm.count > 1 ? { ...elm, count: elm.count - 1 } : elm))
  // }

  return (
    <>
      <h1>Online Shop</h1>

      <div className="content">
        <div>
          <h3>Products</h3>
          <div className="list">
            {
              products.map(prod => (
                <div key={prod.id}>
                  <img src={prod.pic} alt={prod.name} />
                  <p>{prod.name}</p>
                  <strong>{prod.price}</strong>
                  <button onClick={() => moveToCart(prod)}>move</button>
                </div>
              ))
            }
          </div>
        </div>

        <div>
          <h3>Cart</h3>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Count</th>
                <th>Subtotal</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                basket.map(item => (

                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.count}</td>
                    <td>{item.count * item.price}</td>
                    <td>
                    <button onClick={()=>addCountProd(item)}>+</button>
                    <button onClick={()=>subCountProd(item)}>-</button>
                    <button onClick={()=>delProd(item.id)}>x</button>
                    
                    </td>

                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
