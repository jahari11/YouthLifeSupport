import React from 'react';
import { useNavigate } from 'react-router-dom';

const imageGallery = [
  { id: 1, title: 'Albany Firebirds Fundraiser', imageUrl: 'https://i.ibb.co/ZBrCbFL/20241130-204423.jpg' }
];

const Events = () => {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className='events grid grid-cols-1 md:grid-cols-3 gap-6 p-6'>
      {imageGallery.map((item) => (
        <div
          key={item.id}
          className='group cursor-pointer'
          onClick={() => handleImageClick(item.id)}
        >
          <img
            src={item.imageUrl}
            alt={item.title}
            className='w-full h-64 object-cover rounded-md shadow-md group-hover:opacity-90'
          />
          <h4 className='text-center mt-2 text-lg font-semibold'>{item.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Events;
