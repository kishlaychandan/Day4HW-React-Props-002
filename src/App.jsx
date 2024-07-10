import { useState } from 'react'
import Movies from './components/movies/Movies'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Movies/>
    </>
  )
}

export default App
