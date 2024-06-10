import React from 'react';
import { Link } from 'react-router-dom';


const Cards = () => {



  const cardsData = [
    { id: 1, frontContent: `L.I.F.E.'s Alternative: L.E.A.D Diversion Program`, sectionId:'program-3', backContent: `Our harm-reduction diversion program's success is based on the Operation Work Group (OWG), Policy Coordinating Group (PCG), and Community Engagement Coordinators.`},
    { id: 2, frontContent: 'Back2LIFE Reintegration & Transition Support Program', sectionId: 'program-1', backContent: `Back2LIFE Reintegration & Transition Support works with inmates at Schenectady County Jail to reduce recidivism and enhance public safety.` },
    { id: 3, frontContent: '1Life2Live Gun & Gang Violence Prevention & Intervention Program', sectionId: 'program-2', backContent: `The 1Life2Live program aims to reduce gun violence, shooting injuries, and homicides in Schenectady County over time.` }
  ];

  return(
  <div class='bg-ylsnGrey p-4'>
  <h2 class='text-center  text-4xl text-white'>Our Programs</h2>
  <div class='flex justify-between flex-wrap'>
  {cardsData.map(card => (
      <Link to={`/programs#${card.sectionId}`} class=" m-6 block max-w-sm p-6 border-gray-200 rounded-lg shadow hover:bg-gray-100 bg-ylsnRed dark:hover:bg-gray-700 flex flex-col min-h-[300px]">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{card.frontContent}</h5>
        <p class="font-normal text-lg mb-3 text-white text-center">{card.backContent}</p>
        <p class='underline text-center text-lg text-white'>Read more</p>
      </Link>
    ))}
  </div>
  </div>
  );
}

export default Cards;
