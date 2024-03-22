import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 5;
  let [counter , setCounter] = useState(15)
  const addValue=()=>{
    if (counter<20)
    {
      setCounter(counter+1)
    }
    else{
      window.alert("sorry")
    }
  }
  const removeValue=()=>{
    if(counter>=1){
    setCounter(counter-1)
    }
    else{
      window.alert('Sorry')
    
    }
  }
  

  return (
    <>
    <h1>Chai or React</h1>
    <h2>counter value: {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
