import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  let [message, setMessage] = useState('')

  // Function to add the value
  const addValue = () =>{
    setCounter(counter+1)
    if(counter >= 20){
      setCounter(20)
      displayMessage();
    }
    else{
      setMessage("")
    }
  }

  // Function to remove the value
  const removeValue = () =>{
    setCounter(counter - 1)
    if(counter <= 0){
      setCounter(0)
      displayLessMessage();
    }
    else{
      setMessage("")
    }
  }

  // Display maximum Message
  function displayMessage(){
    setMessage("Can't increase more! Maximum value reached.")
  }

  // Display minimum Message
  function displayLessMessage(){
    setMessage('Cant decrease more! Minimum value reached.')
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter} </h2>
      <div className="btn">
        <button
        onClick={addValue}>Add Value</button>
        <br />
        <button onClick={removeValue}>Remove Value</button>
      </div>
      <h2>{message}</h2>
    </>
  )
}

export default App
