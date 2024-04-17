import React from 'react';

const Cards = () => {
  const cardsData = [
    { id: 1, frontContent: 'L.I.F.E.`s Alternative: L.E.A.D. (Let Everyone Advance with Dignity) Diversion Program', iconClass: ""},
    { id: 2, frontContent: 'Back2LIFE Reintegration & Transition Support Program' },
    { id: 3, frontContent: '1Life2Live Gun & Gang Violence Prevention & Intervention Program' }
  ];

  return (
    <div className='card-container'>
      {cardsData.map(card => (
        <div className='card' key={card.id}>
            <div className="card-icon">
                <i>{card.iconClass}</i>
            </div>
          <h2>{card.frontContent}</h2>
        </div>
      ))}
    </div>
  );
};

export default Cards;
