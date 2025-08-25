import React, { useState } from 'react'
import YLSNLOGO from '../Assets/YLSNLOGO.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className='navbar'>
        <div className="logo">
            <Link to='/' onClick={closeMenu}><img src={YLSNLOGO} alt="YLSN Logo" /></Link>
        </div>
        
        {/* Mobile hamburger menu */}
        <button 
          className="mobile-menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <div className={`navbar-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            <Link to='/' onClick={closeMenu}>Home</Link>
            <Link to='/about' onClick={closeMenu}>About</Link>
            <Link to='/programs' onClick={closeMenu}>Programs</Link>
            <Link to='/events' onClick={closeMenu}>Events</Link>
        </div>
    </div>
  )
}

export default Navbar