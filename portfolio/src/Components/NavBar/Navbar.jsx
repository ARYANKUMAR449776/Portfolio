import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <img src={assets.LogoWhite} alt="logo" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">CONTACT</Link>
                    </li>
                    <li>
                        <Link to="/">PROJECTS</Link>
                    </li>
                    <li>
                        <Link to="/">EXPERIENCE</Link>
                    </li>
                    <li>
                        <Link to="/">LINKS</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
