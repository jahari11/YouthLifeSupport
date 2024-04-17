import React from 'react'
import YLSNLOGO from '../Assets/YLSNLOGO.jpg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            <img src={YLSNLOGO} alt="" />
        </div>
        <div className="navbar-links">
            <Link to='/'>Home</Link>
            <Link to='/about'>About Us</Link>
            <Link to='/programs'>Programs</Link>
            <Link to='/events'>Events</Link>
        </div>
    </div>
  )
}

export default Navbar