import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Card from './components/Card'

function App() {
  let myobj = {
    username: "Ananta",
    age:21
  }
  
  return (
    <>
      <h1 className='bg-green-600 mb-4 text-black p-4 rounded-xl'>I love Srijita</h1>
      <Card username="ChaiAurCode" btnText="Click Me!"/>
      <Card btnText="Click Me!" username="Ananta"/>
    </>
  )
}

export default App
