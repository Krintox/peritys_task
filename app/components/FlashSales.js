'use client';

import { useRef, useState, useEffect } from 'react';

export default function FlashSales() {
  const products = [
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

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth"
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth"
      });
    }
  };

  const calculateTimeLeft = () => {
    const eventTime = new Date().setHours(24, 0, 0, 0);
    const currentTime = new Date().getTime();
    const timeLeft = eventTime - currentTime;

    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((timeLeft / 1000 / 60) % 60),
      seconds: Math.floor((timeLeft / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full py-8">
          <span className="text-lg font-semibold text-red-600 border-l-4 border-red-600 pl-2">
            Today’s
          </span>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
        <h2 className="text-3xl font-bold">Flash Sales</h2>
          <div className="text-2xl font-bold text-gray-800 flex space-x-4">
            <div>
              <span>{timeLeft.days}</span> <span className="text-sm">Days</span>
            </div>
            <div>
              <span>{timeLeft.hours}</span> <span className="text-sm">Hours</span>
            </div>
            <div>
              <span>{timeLeft.minutes}</span> <span className="text-sm">Minutes</span>
            </div>
            <div>
              <span>{timeLeft.seconds}</span> <span className="text-sm">Seconds</span>
            </div>
          </div>
        <div className="flex items-center space-x-4">
          <button onClick={scrollLeft} className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100">
            ←
          </button>
          <button onClick={scrollRight} className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100">
            →
          </button>
        </div>
        </div>
      </div>
      <div className="relative flex items-center">
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 scrollbar-hide px-6"
        >
          {products.map((product, index) => (
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
