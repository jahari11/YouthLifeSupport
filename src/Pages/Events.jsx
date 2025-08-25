import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Import your actual event photos here
// You can add your photos to the src/Assets/Events folder and import them like this:
// import EventPhoto1 from '../Assets/Events/event1.jpg';
// import EventPhoto2 from '../Assets/Events/event2.jpg';

// For now, using the existing photo and placeholder structure
// Replace these with your actual imported photos
const imageGallery = [
  { 
    id: 1, 
    title: 'Albany Wolves Fundraiser 2024', 
    description: 'Youth group enjoying a special meet and greet with the Albany Wolves mascot at the arena',
    imageUrl: 'https://i.ibb.co/ZBrCbFL/20241130-204423.jpg',
    category: 'Mascot Event',
    date: 'November 30, 2024'
  },
  { 
    id: 2, 
    title: 'Albany Wolves Fundraiser 2024', 
    description: 'Group of youth and adults enjoying the game from a private suite, building community bonds',
    imageUrl: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800&h=600&fit=crop',
    category: 'Community',
    date: 'November 30, 2024'
  },
  { 
    id: 3, 
    title: 'Albany Wolves Fundraiser 2024', 
    description: 'Young leaders from our program experiencing a professional sports event together',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    category: 'Leadership',
    date: 'November 30, 2024'
  },
  { 
    id: 4, 
    title: 'Albany Wolves Fundraiser 2024', 
    description: 'Promoting healthy lifestyles through sports and arena experiences',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
    category: 'Sports',
    date: 'November 30, 2024'
  },
  { 
    id: 5, 
    title: 'Albany Wolves Fundraiser 2024', 
    description: 'Supporting academic success through experiential learning opportunities',
    imageUrl: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
    category: 'Education',
    date: 'November 30, 2024'
  },
  { 
    id: 6, 
    title: 'Albany Wolves Fundraiser 2024', 
    description: 'Building stronger family bonds through fun activities at the arena',
    imageUrl: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=800&h=600&fit=crop',
    category: 'Family',
    date: 'November 30, 2024'
  }
];

const Events = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filter, setFilter] = useState('All');
  const [filteredImages, setFilteredImages] = useState(imageGallery);

  // Filter images based on category
  useEffect(() => {
    if (filter === 'All') {
      setFilteredImages(imageGallery);
    } else {
      setFilteredImages(imageGallery.filter(img => img.category === filter));
    }
  }, [filter]);

  // Get unique categories for filter buttons
  const categories = ['All', ...new Set(imageGallery.map(img => img.category))];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

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
            Discover the amazing events and activities that bring our community together
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

        {/* Photo Gallery */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="break-inside-avoid group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Image */}
                <img
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                        {image.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm opacity-90 mb-4">{image.description}</p>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageClick(image);
                        }}
                        className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        View
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleEventDetails(image.id);
                        }}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors duration-200 flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
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

      {/* Lightbox Modal */}
      {isModalOpen && selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200 z-10"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            {/* Image */}
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            
            {/* Image Info */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <div className="text-white">
                                 <div className="mb-2">
                   <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full">
                     {selectedImage.category}
                   </span>
                 </div>
                 <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                 <p className="text-lg opacity-90 mb-2">{selectedImage.description}</p>
                 {selectedImage.date && (
                   <p className="text-sm opacity-75">📅 {selectedImage.date}</p>
                 )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
