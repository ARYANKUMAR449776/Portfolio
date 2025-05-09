import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavBar/Navbar.jsx'
import { Routes ,Route} from 'react-router-dom'
import Homepage from './Components/Pages/Homepage.jsx'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/about" element={<Aboutpage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </>
  )
}

export default App
