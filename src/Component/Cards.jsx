import React from 'react';
import { Link } from 'react-router-dom';


const Cards = () => {



  const cardsData = [
    { id: 1, frontContent: `L.I.F.E.'s Alternative: L.E.A.D Diversion Program`, sectionId:'program-3', backContent: `Our harm-reduction diversion program's success is based on the Operation Work Group (OWG), Policy Coordinating Group (PCG), and Community Engagement Coordinators.`},
    { id: 2, frontContent: 'Back2LIFE Reintegration & Transition Support Program', sectionId: 'program-1', backContent: `Back2LIFE Reintegration & Transition Support works with inmates at Schenectady County Jail to reduce recidivism and enhance public safety.` },
    { id: 3, frontContent: '1Life2Live Gun & Gang Violence Prevention & Intervention Program', sectionId: 'program-2', backContent: `The 1Life2Live program aims to reduce gun violence, shooting injuries, and homicides in Schenectady County over time.` }
  ];

  return(
  <div class='p-4'>
  <h2 class='text-center  text-5xl text-ylsnRed mb-4'>Our Programs</h2>
  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
  {cardsData.map(card => (
      <Link to={`/programs#${card.sectionId}`} class="group relative block bg-black">
      <img
    alt=""
    src="https://images.unsplash.com/photo-1516149893016-813d9a01d5d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">
    <p className="text-sm font-medium uppercase tracking-widest text-ylsnRed">Youth Life Support Network</p>

    <p className="text-xl font-bold text-white sm:text-2xl">{card.frontContent}</p>

    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-md text-white">
          {card.backContent}
        </p>
        <p className='text-sm text-white underline'>Read More</p>
      </div>
    </div>
  </div>
  </Link>
    ))}
  </div>
  </div>
  );
}

export default Cards;
