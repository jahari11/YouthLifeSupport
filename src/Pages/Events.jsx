import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Event data with multiple photos per event
// TODO: Replace the placeholder URLs below with your actual Albany Wolves Fundraiser photos
// You can upload your photos to a service like imgur.com, ibb.co, or similar
// Then replace each URL with your actual photo URLs
const eventsData = [
  {
    id: 1,
    title: 'Albany Wolves Fundraiser 2024',
    description: 'Youth group enjoying special events with the Albany Wolves mascot and community activities',
    thumbnail: 'https://i.imgur.com/KYH3k5l.jpg',
    photos: [
      {
        id: 1,
        url: 'https://i.imgur.com/KYH3k5l.jpg',
        description: 'Albany Wolves Fundraiser 2024'
      },
      {
        id: 2,
        url: 'https://i.imgur.com/rnUkzzm.jpg',
        description: 'Albany Wolves Fundraiser 2024'
      },
      {
        id: 3,
        url: 'https://i.imgur.com/xdpk3pu.jpg',
        description: 'Albany Wolves Fundraiser 2024'
      },
      {
        id: 4,
        url: 'https://i.imgur.com/jAY0ssG.jpg',
        description: 'Albany Wolves Fundraiser 2024'
      }
    ],
    category: 'Fundraiser',
    date: 'November 30, 2024'
  }
];

const Events = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [filter, setFilter] = useState('All');

  // Filter events based on category
  const filteredEvents = filter === 'All' 
    ? eventsData 
    : eventsData.filter(event => event.category === filter);

  // Get unique categories for filter buttons
  const categories = ['All', ...new Set(eventsData.map(event => event.category))];

  const openSlideshow = (event) => {
    setSelectedEvent(event);
    setCurrentPhotoIndex(0);
    setIsSlideshowOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeSlideshow = () => {
    setIsSlideshowOpen(false);
    setSelectedEvent(null);
    setCurrentPhotoIndex(0);
    document.body.style.overflow = 'unset';
  };

  const nextPhoto = () => {
    if (selectedEvent) {
      setCurrentPhotoIndex((prevIndex) => 
        prevIndex === selectedEvent.photos.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevPhoto = () => {
    if (selectedEvent) {
      setCurrentPhotoIndex((prevIndex) => 
        prevIndex === 0 ? selectedEvent.photos.length - 1 : prevIndex - 1
      );
    }
  };

  const goToPhoto = (index) => {
    setCurrentPhotoIndex(index);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isSlideshowOpen) return;
      
      switch (e.key) {
        case 'Escape':
          closeSlideshow();
          break;
        case 'ArrowRight':
          nextPhoto();
          break;
        case 'ArrowLeft':
          prevPhoto();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSlideshowOpen, selectedEvent]);

  const handleEventDetails = (id) => {
    navigate(`/events/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Events</h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
            Click on any event to view a slideshow of photos from that special day
          </p>
        </div>
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                filter === category
                  ? 'bg-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openSlideshow(event)}
            >
              {/* Event Thumbnail */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={event.thumbnail}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{event.title}</h3>
                  <p className="text-sm opacity-90">{event.description}</p>
                </div>
              </div>

              {/* Event Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">📅 {event.date}</span>
                  <span className="text-sm text-gray-600">📸 {event.photos.length} photos</span>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      openSlideshow(event);
                    }}
                    className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    View Slideshow
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEventDetails(event.id);
                    }}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors duration-200"
                  >
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">Try selecting a different category or check back later for new events.</p>
          </div>
        )}
      </div>

      {/* Slideshow Modal */}
      {isSlideshowOpen && selectedEvent && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          {/* Close Button */}
          <button
            onClick={closeSlideshow}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200 z-10"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors duration-200 z-10"
          >
            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Main Content */}
          <div className="relative max-w-6xl max-h-full p-4">
            {/* Current Photo */}
            <div className="relative">
              <img
                src={selectedEvent.photos[currentPhotoIndex].url}
                alt={selectedEvent.photos[currentPhotoIndex].description}
                className="max-w-full max-h-[70vh] object-contain rounded-lg"
              />
              
              {/* Photo Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">{selectedEvent.title}</h3>
                  <p className="text-lg opacity-90 mb-2">{selectedEvent.photos[currentPhotoIndex].description}</p>
                  <p className="text-sm opacity-75">📅 {selectedEvent.date}</p>
                </div>
              </div>
            </div>

            {/* Photo Counter */}
            <div className="text-center mt-4 text-white">
              <p className="text-lg">
                {currentPhotoIndex + 1} of {selectedEvent.photos.length}
              </p>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex justify-center mt-6 gap-2">
              {selectedEvent.photos.map((photo, index) => (
                <button
                  key={photo.id}
                  onClick={() => goToPhoto(index)}
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                    index === currentPhotoIndex
                      ? 'border-red-500 scale-110'
                      : 'border-gray-400 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={photo.url}
                    alt={photo.description}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
