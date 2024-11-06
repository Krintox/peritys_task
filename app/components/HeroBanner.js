'use client';

import { useState, useEffect } from 'react';
import Sidebar from './SideBar';
import Image from 'next/image';
import slideimg from '../components/images/iphoneimg.png'

export default function HeroBanner() {
  const slides = [
    {
      title: 'MacBook Pro',
      subtitle: 'Save up to $300',
      image: '/images/macbook.png',
      icon: '💻'
    },
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
    <div className='flex w-[85%]'>
      <Sidebar />
      <div className="flex justify-center items-center relative p-8 overflow-hidden bg-black text-white w-[80%] flex items-center justify-center">
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)`, width: `${slides.length * 100}%` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 flex items-center mr-4" style={{ flexBasis: '100%' }}>
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
                <Image
                  src={slideimg} // Ensure this is a valid path or URL
                  alt={slide.title}
                  width={300} // Adjust the width as needed
                  height={300} // Adjust the height as needed
                  className="w-3/4 max-w-xs object-contain"
                  objectFit="contain"
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
    </div>
  );
}
