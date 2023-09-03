import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  const addValue = () =>{
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    if (counter >= 20) {
      counter = 20;
      setCounter(counter)
    }
  }

  const removeValue = () => {
    setCounter(counter-1)
    if (counter <= 0) {
      counter = 0;
      setCounter(counter)
    }
  }

  const resetValue = () => {
    counter = 0;
    setCounter(counter)

  }


  return (
    <>
    <h1>COFFEE AND REACT</h1>
    <h2>counter : {counter}</h2>
    <button onClick={addValue} className='btn'>+</button> <br />
    <button onClick={removeValue} className='btn'>-</button> <br />
    <button onClick={resetValue}>RESET</button>
    </>
  )
}

export default App
