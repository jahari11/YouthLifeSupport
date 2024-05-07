import React from 'react';
import { Link } from 'react-router-dom';


const Cards = () => {



  const cardsData = [
    { id: 1, frontContent: `L.I.F.E.'s Alternative: L.E.A.D. (Let Everyone Advance with Dignity) Diversion Program`, sectionId:'program-3'},
    { id: 2, frontContent: 'Back2LIFE Reintegration & Transition Support Program', sectionId: 'program-1' },
    { id: 3, frontContent: '1Life2Live Gun & Gang Violence Prevention & Intervention Program', sectionId: 'program-2' }
  ];

  return (
    <div className='c-section'>
    <h2 className='c-section-h'>Our Programs</h2>
    <div className='card-container'>
      {cardsData.map(card => (
        <Link to={`/programs#${card.sectionId}`}>
        <div className='card' key={card.id}>
            <i class="fa-regular fa-flag"></i>
          <h2>{card.frontContent}</h2>
        </div>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default Cards;
