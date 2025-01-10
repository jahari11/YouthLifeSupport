import React from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const imageGallery = [
  { id: 1, title: 'Albany Firebirds Fundraiser', imageUrl: 'https://i.ibb.co/ZBrCbFL/20241130-204423.jpg' },
  { id: 2, title: 'Albany Firebirds Fundraiser', imageUrl: 'https://i.ibb.co/x5f2MJb/20241130-204437.jpg' },
  { id: 3, title: 'Albany Firebirds Fundraiser', imageUrl: 'https://i.ibb.co/0XzN6Pb/20241130-205941.jpg' },
];

const EventDetails = () => {
  const { id } = useParams();
  const currentEvent = imageGallery.find((event) => event.id === parseInt(id));

  if (!currentEvent) return <p>Event not found.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">{currentEvent.title}</h1>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        loop
        navigation
        modules={[Navigation]} 
      >
        {imageGallery.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex justify-center">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-[800px] h-[800px] object-cover rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default EventDetails;
