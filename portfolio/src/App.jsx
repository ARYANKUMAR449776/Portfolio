import { use, useState, useEffect } from 'react'
import './App.css'
import NavBar from '../src/Components/Navbar.jsx'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (

    <>
      <NavBar />
      <h1>My React App, {message}</h1>
    </>
  )
}

export default App
