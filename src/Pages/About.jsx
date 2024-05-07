import React from 'react'
import Banner from '../Component/Banner'
import Team from '../Component/Team'
import transition from '../Component/transition'

const About = () => {
  return (
    <div className='section'>
      <Banner />
      <div className="about-us-pitch">
        <span className='year'>Since 2012</span>
        <h3 className='aup-header'>Youth L.I.F.E. Support Network, Inc.</h3>
        <div className='aup-text'>
        <p>Youth L.I.F.E. Support Network, Inc. is a community-based 501(c)(3) non-profit organization dedicated to promoting public safety. Embracing a public health model approach, we tackle community violence by providing comprehensive, holistic services to high-risk youth and families in underserved areas. Our mission is to empower youth to thrive and embrace the promise of life.</p>
        <p>Through a range of holistic, wrap-around services, Youth L.I.F.E. Support Network, Inc. offers tailored support to address the diverse needs of at-risk youth and their families. By fostering youth development and fostering strong community collaborations, we establish enduring relationships that serve as a vital support system, contributing to the reduction of violence and suffering in our communities.</p>
        <span>The Youth are the Leaders of tomorrow. We must work collectively to empower and support their visions and feed their ambitions.</span>
        </div>
      </div>
      <Team />
      <div className="about-pitch">
        <span>
          Without a “Network”, there can be no REAL success!
        </span>
      </div>
    </div>
  )
}

export default About