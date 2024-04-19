import React from 'react';
import { Link } from 'react-router-dom';

const Cards = () => {
  const cardsData = [
    { id: 1, frontContent: `L.I.F.E.'s Alternative: L.E.A.D. (Let Everyone Advance with Dignity) Diversion Program`, link:'/programs'},
    { id: 2, frontContent: 'Back2LIFE Reintegration & Transition Support Program', link: '/programs' },
    { id: 3, frontContent: '1Life2Live Gun & Gang Violence Prevention & Intervention Program', link: '/programs' }
  ];

  return (
    <div className='c-section'>
    <h2 className='c-section-h'>Our Programs</h2>
    <div className='card-container'>
      {cardsData.map(card => (
        <Link to={card.link}>
        <div className='card' key={card.id}>
            <i class="fa-regular fa-flag"></i>
          <h2>{card.frontContent}</h2>
          <Link to={card.link}>Read More</Link>
        </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Cards;
