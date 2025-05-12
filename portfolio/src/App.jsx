import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavBar/Navbar.jsx'
import { Routes ,Route,useLocation} from 'react-router-dom'
import Homepage from './Components/Pages/Homepage.jsx'
import ErrorPage from './Components/Pages/ErrorPage.jsx'

function App() {
   const pageLocation = useLocation();
   const hideNavbar = ["/404"];


  return (
  
    <>
    {!hideNavbar.includes(pageLocation.pathname) && <Navbar />}
    <Routes>
        <Route path="/" element={<Homepage />} />
         <Route path="/404" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
