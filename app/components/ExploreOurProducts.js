'use client';

import { useRef } from 'react';

export default function ExploreOurProducts() {
  const productsRow1 = [
    {
      name: "HAVIT HV-G92 Gamepad",
      discount: "40%",
      price: "$120",
      originalPrice: "$160",
      rating: 4.8,
      reviews: 88,
      image: "/images/gamepad.png"
    },
    {
      name: "AK-900 Wired Keyboard",
      discount: "35%",
      price: "$960",
      originalPrice: "$1160",
      rating: 4,
      reviews: 75,
      image: "/images/keyboard.png"
    },
    {
      name: "IPS LCD Gaming Monitor",
      discount: "30%",
      price: "$370",
      originalPrice: "$400",
      rating: 4.5,
      reviews: 99,
      image: "/images/monitor.png"
    },
    {
      name: "S-Series Comfort Chair",
      discount: "25%",
      price: "$375",
      originalPrice: "$400",
      rating: 4.3,
      reviews: 99,
      image: "/images/chair.png"
    },
  ];

  const productsRow2 = [
    {
      name: "Wireless Gaming Mouse",
      discount: "20%",
      price: "$40",
      originalPrice: "$50",
      rating: 4.7,
      reviews: 65,
      image: "/images/mouse.png"
    },
    {
      name: "RGB Gaming Headset",
      discount: "15%",
      price: "$80",
      originalPrice: "$95",
      rating: 4.6,
      reviews: 120,
      image: "/images/headset.png"
    },
    {
      name: "Gaming Laptop",
      discount: "10%",
      price: "$1200",
      originalPrice: "$1300",
      rating: 4.9,
      reviews: 150,
      image: "/images/laptop.png"
    },
    {
      name: "Ergonomic Gaming Desk",
      discount: "5%",
      price: "$350",
      originalPrice: "$370",
      rating: 4.2,
      reviews: 30,
      image: "/images/desk.png"
    },
  ];

  const scrollRefRow1 = useRef(null);
  const scrollRefRow2 = useRef(null);

  const scrollLeft = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: -300,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = (ref) => {
    if (ref.current) {
      ref.current.scrollBy({
        left: 300,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="w-full py-8">
      <span className="text-lg font-semibold text-red-600 border-l-4 border-red-600 pl-2">
        Our products
      </span>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold">Explore Our Products</h2>
        <div className="flex items-center space-x-4">
          <button onClick={() => scrollLeft(scrollRefRow1)} className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100">
            ←
          </button>
          <button onClick={() => scrollRight(scrollRefRow1)} className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100">
            →
          </button>
        </div>
      </div>
      <div className="relative flex items-center mb-6">
        <div
          ref={scrollRefRow1}
          className="flex overflow-x-auto space-x-4 scrollbar-hide px-6"
        >
          {productsRow1.map((product, index) => (
            <div key={index} className="w-60 flex-shrink-0 bg-white rounded-lg shadow-lg p-4">
              <div className="relative">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {product.discount}
                </span>
                <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
              </div>
              <h3 className="text-gray-800 font-semibold">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-bold">{product.price}</span>
                <span className="text-gray-400 line-through">{product.originalPrice}</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">
                  {"★".repeat(Math.round(product.rating))}
                </span>
                <span className="text-gray-600 ml-2">({product.reviews})</span>
              </div>
              <button className="w-full mt-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex items-center mb-6">
        <div
          ref={scrollRefRow2}
          className="flex overflow-x-auto space-x-4 scrollbar-hide px-6"
        >
          {productsRow2.map((product, index) => (
            <div key={index} className="w-60 flex-shrink-0 bg-white rounded-lg shadow-lg p-4">
              <div className="relative">
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {product.discount}
                </span>
                <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
              </div>
              <h3 className="text-gray-800 font-semibold">{product.name}</h3>
              <div className="flex items-center space-x-2">
                <span className="text-red-500 font-bold">{product.price}</span>
                <span className="text-gray-400 line-through">{product.originalPrice}</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">
                  {"★".repeat(Math.round(product.rating))}
                </span>
                <span className="text-gray-600 ml-2">({product.reviews})</span>
              </div>
              <button className="w-full mt-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <button className="text-red-600 font-semibold border px-4 py-2 rounded-md hover:bg-red-50 mb-6">
        View All Products
      </button>
    </div>
  );
}
