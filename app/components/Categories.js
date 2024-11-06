'use client';

import { useState } from 'react';
import { FaMobileAlt, FaLaptop, FaTabletAlt, FaCamera, FaHeadphones, FaGamepad } from 'react-icons/fa';

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('Camera');
  
  const categories = [
    { name: 'Phones', icon: <FaMobileAlt /> },
    { name: 'Computers', icon: <FaLaptop /> },
    { name: 'SmartWatch', icon: <FaTabletAlt /> },
    { name: 'Camera', icon: <FaCamera /> },
    { name: 'HeadPhones', icon: <FaHeadphones /> },
    { name: 'Gaming', icon: <FaGamepad /> },
  ];

  return (
    <div className="w-full py-8">
      <div className="mb-8">
      <span className="text-lg font-semibold text-red-600 border-l-8 border-red-600 pl-2">
        Categories
      </span>
      <div className="flex items-center justify-between mb-4 mt-4">
        <div className="">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl">Browse By Category</h2>
          </div>
        </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100">
              ←
            </button>
            <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100">
              →
            </button>
          </div>
      </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="flex space-x-4 overflow-x-auto p-4">
          {categories.map((category) => (
            <div
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex flex-col items-center justify-center w-32 h-32 p-8 border rounded-lg cursor-pointer 
                ${selectedCategory === category.name ? 'bg-red-500 text-white' : 'bg-white text-black'} 
                hover:shadow-lg transition-all duration-200 ease-in-out`}
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <span className="">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
