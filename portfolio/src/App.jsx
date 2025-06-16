import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavBar/Navbar.jsx'
import { Routes ,Route,useLocation} from 'react-router-dom'
import Homepage from './Components/Pages/Homepage.jsx'
import ErrorPage from './Components/Pages/ErrorPage.jsx'
import ExperiencePage from './Components/Pages/ExperiencePage.jsx'

function App() {
   const pageLocation = useLocation();
   const hideNavbar = ["/404", "/experience"];


  return (
  
    <>
    {!hideNavbar.includes(pageLocation.pathname) && <Navbar />}
    <Routes>
        <Route path="/" element={<Homepage />} />
         <Route path="/404" element={<ErrorPage />} />
         <Route path="/experience" element={<ExperiencePage />} />
      </Routes>
    </>
  )
}

export default App
