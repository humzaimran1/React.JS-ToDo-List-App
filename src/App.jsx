import React, { useState } from 'react'
import './App.css'
import { MdDelete } from "react-icons/md";
const App = () => {

  const [initial, setInitial] = useState("");
  const [data, setData] = useState([])

  const getInputs = (event) => {
    console.log(event.target.value);
    setInitial(event.target.value)
  }
  const getData = () => {
    console.log(initial);
    if (initial === "") {
      alert("Please Enter Task !")
    } else {
      let storeData = [...data, initial]
      setData(storeData)
      setInitial("")
    }



  }
  console.log(data);

  const deleteItem = (index) => {
    console.log(index);
    let filterData = data.filter((curElem, id) => {
      return id !== index
    })
    setData(filterData)
  }

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      getData();
    }
  };
  return (
    <>
      <div className='container'>
        <h1>To-Do List</h1>
        <div className='taskInput'>
          <input type='text' onKeyDown={handleKeyPress} placeholder='Enter Your Task' value={initial} onChange={getInputs} />
          <button onClick={getData} >Add</button>
        </div>
        {data.map((curVal, index) => {
          return (
            <>
              <div className='taskData'>
                <p>{curVal}</p>

                <button id="deleteIcon" onClick={() => deleteItem(index)} ><MdDelete size={28} /></button>

              </div>
            </>
          )
        })}
      </div>
    </>
  )
}

export default App