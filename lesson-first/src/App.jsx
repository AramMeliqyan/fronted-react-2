import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  const [people, setPeople] = useState([
    { id: 101, name: "Tiko", surname: "Harutyunyan", salary: 200000 },
    { id: 102, name: "Ano", surname: "Davtyan", salary: 350000 },
    { id: 103, name: "Gago", surname: "Tigranyan", salary: 102000 },
    { id: 104, name: "Maro", surname: "Melqonyan", salary: 120000 },
    { id: 105, name: "Saro", surname: "Harutyunyan", salary: 75000 },
    { id: 106, name: "Varo", surname: "Mnacakanyan", salary: 820000 },
  ])


  // const handleSalaryUp = (id)=>{
  //   let temp = [...people]
  //   let index = temp.findIndex(x=>x.id == id)
  //   temp[index].salary +=57000
  //   setPeople(temp)
  // }

  const handleSalaryUp = (id) => {
    setPeople(people.map(item =>
      item.id == id ? { item, salary: item.salary + 50000 } : item
    ))
  }

 const handleSalaryDown = id =>{
  setPeople(people.map(item=>
    item.id==id && item.salary >50000 ? {item,salary:item.salary - 50000}:item
  ))
 }

 const removePeople = id =>{
  setPeople(people.filter(x =>x.id !== id))
 }

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>level up</button>
      {
        people.map((item) => <div key={item.id}>
          <p>{item.name} {item.surname}</p>
          <strong>{item.salary}AMD</strong>
          <button onClick={() => handleSalaryUp(item.id)}>salary up</button>
          <button onClick={() => handleSalaryDown(item.id)}>salary down</button>
          <button onClick={()=> removePeople(item.id)}>remove</button>
        </div>)
      }
    </>
  )
}

export default App
