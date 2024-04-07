import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RouteComponents from './route/Route'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouteComponents />
    </>
  )
}

export default App
