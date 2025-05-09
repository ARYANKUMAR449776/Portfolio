import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={assets.LogoWhite} alt="logo" className='navbar-logo'/>
            <nav>
                <ul className='navbar-list'>
                    <li className='navbar-list-items'>
                        <Link to="/">CONTACT</Link>
                    </li >
                    <li  className='navbar-list-items'>
                        <Link to="/">PROJECTS</Link>
                    </li>
                    <li className='navbar-list-items'>
                        <Link to="/">EXPERIENCE</Link>
                    </li>
                    <li className='navbar-list-items'>
                        <Link to="/">LINKS</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
