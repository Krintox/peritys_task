'use client';

import { useState, useEffect } from 'react';

export default function HeroBanner() {
  const slides = [
    {
      title: 'iPhone 14 Series',
      subtitle: 'Up to 10% off Voucher',
      image: '/images/iphone-14.png', // Replace with actual image paths
      icon: '🍎'
    },
    {
      title: 'Samsung Galaxy S23',
      subtitle: 'Get $200 off on Pre-Orders',
      image: '/images/samsung-s23.png',
      icon: '📱'
    },
    {
      title: 'MacBook Pro',
      subtitle: 'Save up to $300',
      image: '/images/macbook.png',
      icon: '💻'
    },
    {
      title: 'Apple Watch Series 8',
      subtitle: '25% Off on All Accessories',
      image: '/images/apple-watch.png',
      icon: '⌚'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative overflow-hidden bg-black text-white rounded-lg w-full h-[60vh] lg:h-[80vh] flex items-center justify-center p-8">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${slides.length * 100}%` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 flex items-center p-8" style={{ flexBasis: '100%' }}>
            {/* Left half: Text Content */}
            <div className="flex-1 space-y-4">
              <div className="text-sm text-gray-400">{slide.title}</div>
              <h2 className="text-4xl font-bold">{slide.subtitle}</h2>
              <button className="text-lg mt-2 flex items-center space-x-2 hover:text-red-500 transition duration-300">
                <span>Shop Now</span>
                <span>➔</span>
              </button>
            </div>
            
            {/* Right half: Image */}
            <div className="flex-1 flex justify-center items-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-3/4 max-w-xs object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Centered Dots for indicating active slide */}
      <div className="absolute bottom-4 w-full flex justify-center space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-red-500' : 'bg-white'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}
