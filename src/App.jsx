import { useState } from 'react'
import './App.css'
import NewQuestion from './pages/NewQuestion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NewQuestion />

    </>
  )
}

export default App
