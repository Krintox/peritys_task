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
                ➔
              </span>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
}
