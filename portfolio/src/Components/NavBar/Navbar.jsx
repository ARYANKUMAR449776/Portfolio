import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Homepage from '../Pages/Homepage'

const Navbar = () => {

    const handleScrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className='navbar'>
            <img src={assets.LogoWhite} alt="logo" className='navbar-logo' />
            <nav>
                <ul className='navbar-list'>

                    <li
                        className="navbar-list-items dropdown"
                        onMouseEnter={handleDropdownToggle}
                        onMouseLeave={handleDropdownToggle}
                    >
                        LINKS
                        {isDropdownOpen && (
                            <div className="dropdown-menu">
                                <a
                                    href="https://www.linkedin.com/in/aryankumaarr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="dropdown-item"
                                >
                                    <img
                                        src={assets.LinkedInLogo}
                                        alt="LinkedIn"
                                        className="dropdown-icon"
                                    />
                                    LinkedIn
                                </a>
                                <a
                                    href="https://github.com/ARYANKUMAR449776"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="dropdown-item"
                                >
                                    <img
                                        src={assets.GithubLogo}
                                        alt="GitHub"
                                        className="dropdown-icon"
                                    />
                                    GitHub
                                </a>
                            </div>
                        )}
                    </li>
                    <li className='navbar-list-items'>
                        <Link to="/404">CONTACT</Link>
                    </li >
                    <li onClick={handleScrollToProjects} className='navbar-list-items'>
                        <Link to="/#projects">PROJECTS</Link>
                    </li>
                    <li className='navbar-list-items'>
                        <Link to="/experience">EXPERIENCE</Link>
                    </li>

                </ul>
            </nav>
        </div>
    )
}

export default Navbar
