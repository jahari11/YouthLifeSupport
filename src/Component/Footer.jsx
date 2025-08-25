import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-container">
        <div className="address">
            <h3>Locations</h3>
            <p>313 Hamilton Street Albany, NY 12210 518-599-0714</p>
            <p>120 Emmons Street Schenectady, NY 12305 518-280-7584</p>
        </div>
        <div className="logo-copyright">
            <span>Youth L.I.F.E. Support Network, Inc. ©2025</span>
        </div>
        <div className="social-links">
        <Link to="https://www.facebook.com/people/Youth-Life-Support-Network-Inc/61559826671354/"><i class="fa-brands fa-facebook"></i></Link>
        <Link to="https://www.instagram.com/youthlifesupportnetwork"><i class="fa-brands fa-instagram"></i></Link>
        </div>
        </div>
    </div>
  )
}

export default Footer