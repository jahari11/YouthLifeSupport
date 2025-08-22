import React from 'react'
import PhotoGallery from '../Component/PhotoGallery'
import YLSLOGO from '../Assets/YLSNLOGO.jpg'
import Cards from '../Component/Cards'
import transition from '../Component/transition'

const Home = () => {
  return (
    <div>
        <PhotoGallery />
        <div className='pb-section'>
          <div className='pb-section-image'>
            <img src={YLSLOGO} alt="Youth Life Support Network logo" loading="lazy" />
          </div>
          <div className="pb-section-text">
            <h2>Our Mission</h2>
            <span>To impact violence by providing outreach, violence prevention & intervention, educational support, recreation, and advocacy to youth and give them a place at the table to help shape the direction of the future of community.</span>
          </div>
        </div>
        <div className="our-pb-section">
          <Cards />
        </div>
        <div className="elevator-pitch">
          <div className="e-p-photo-container">
          <img src="https://images.unsplash.com/photo-1536337005238-94b997371b40?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         alt="" loading="lazy" />
         <div className="e-p-overlay">
          <div className='e-p-text'>
          <h3>Empowering youth and families with essential resources and tools to catalyze positive transformations and foster growth.</h3>
          <div className='e-p-icons'>
            <span><i className="fa-regular fa-circle-check"></i>Education</span>
            <span><i className="fa-regular fa-circle-check"></i>Research</span>
            <span><i className="fa-regular fa-circle-check"></i>Organization</span>
            <span><i className="fa-regular fa-circle-check"></i>Advocacy</span>
          </div>
         </div>
         </div>
        </div>
        </div>
    </div>
  )
}

export default Home