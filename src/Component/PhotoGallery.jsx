import React, { useState } from 'react'
import PHOTO1 from '../Assets/PHOTO1.jpg'
import PHOTO2 from '../Assets/PHOTO2.jpg'
import PHOTO3 from '../Assets/PHOTO3.jpg'


const PhotoGallery = () => {
    const photos =[PHOTO1, PHOTO2, PHOTO3]
    const texts = [
        { header: 'WHO WE ARE', spanText: 'Youth L.I.F.E. Support Network, Inc. is a community-based non-profit organization with a focus on public safety and a commitment to working with high-risk youth and their families.' },
        { header: 'WE BELIEVE', spanText: 'The Youth are the Leaders of tomorrow. We must work collectively to empower and support their visions and feed their ambitions.' },
        { header: 'L.I.F.E.', spanText: 'Without a “Network”, there can be no REAL success!' }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextPhoto = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length)
    }

    const prevPhoto = () => {
        setCurrentIndex((prevIndex)=> (prevIndex - 1 + photos.length) % photos.length)
    }
  return (
    <div className='photo-gallery'>
        <div className='photo-container'>
            <img src={photos[currentIndex]} alt={`Photos ${currentIndex+1}`} />
            <div className="overlay">
          <h2>{texts[currentIndex].header}</h2>
          <span>{texts[currentIndex].spanText}</span>
          </div>
            <div className='photo-controls'>
            <button onClick={prevPhoto}>
            <i class="fa-solid fa-chevron-left"></i>
            </button>
            <button onClick={nextPhoto}>
            <i class="fa-solid fa-chevron-right"></i>
            </button>
        </div>
        </div>
    </div>
  )
}

export default PhotoGallery