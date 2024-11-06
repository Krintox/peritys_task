'use client';

import { useState } from 'react';

export default function Sidebar() {
  const categories = [
    "Woman’s Fashion",
    "Men’s Fashion",
    "Electronics",
    "Home & Lifestyle",
    "Medicine",
    "Sports & Outdoor",
    "Baby’s & Toys",
    "Groceries & Pets",
    "Health & Beauty",
  ];

  const [clickedIndex, setClickedIndex] = useState(null);

  const handleClick = (index) => {
    setClickedIndex(index);
  };

  return (
    <aside className="w-1/4 p-4 border-r">
      <ul className="space-y-4">
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex items-center justify-between text-gray-700 cursor-pointer"
            onClick={() => handleClick(index)}
          >
            {category}
            {(index === 0 || index === 1) && (
              <span
                className={`transition-transform duration-300 ${
                  clickedIndex === index ? 'translate-x-1' : ''
                }`}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.95 11.636L8 6.68597L9.414 5.27197L15.778 11.636L9.414 18L8 16.586L12.95 11.636Z" fill="black"/>
</svg>

              </span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
