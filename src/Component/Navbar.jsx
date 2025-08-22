import React, { useState } from 'react'
import YLSNLOGO from '../Assets/YLSNLOGO.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <div className='navbar'>
        <div className="logo">
            <Link to='/'><img src={YLSNLOGO} alt="Youth Life Support Network logo" /></Link>
        </div>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <i className={isMenuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'}></i>
        </button>
        <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
            <Link to='/' onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to='/about' onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to='/programs' onClick={() => setIsMenuOpen(false)}>Programs</Link>
            <Link to='/events' onClick={() => setIsMenuOpen(false)}>Events</Link>
        </div>
    </div>
  )
}

export default Navbar