import React from 'react'
import PhotoGallery from '../Component/PhotoGallery'
import YLSLOGO from '../Assets/YLSNLOGO.jpg'
import Cards from '../Component/Cards'

const Home = () => {
  return (
    <div>
        <PhotoGallery />
        <div className='pb-section'>
          <div className='pb-section-image'>
            <img src={YLSLOGO} alt="" />
          </div>
          <div className="pb-section-text">
            <h2>Our Mission</h2>
            <span>To impact violence by providing outreach, violence prevention & intervention, educational support, recreation, and advocacy to youth and give them a place at the table to help shape the direction of the future of community.</span>
          </div>
        </div>
        <div className="our-pb-section">
          <h2>Our Programs</h2>
          <Cards />
        </div>
    </div>
  )
}

export default Home