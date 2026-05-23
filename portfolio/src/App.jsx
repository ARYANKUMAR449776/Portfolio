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
    <Routes>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
