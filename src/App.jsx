import { useState } from 'react'
import './App.css'
import NewQuestion from './pages/NewQuestion'
import Navbar from './components/Navbar'
import Rotas from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Rotas />
    </>
  )
}

export default App
