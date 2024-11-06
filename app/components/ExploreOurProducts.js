'use client';

import { useRef, useState, useEffect } from 'react';

export default function FlashSales() {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);

  // Fetch products from API
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        // Add random star ratings if not available in API data
        const updatedProducts = json.map((product) => ({
          ...product,
          rating: product.rating?.rate || Math.floor(Math.random() * 5) + 1
        }));
        setProducts(updatedProducts);
      })
      .catch(err => console.error("Failed to fetch products:", err));
  }, []);

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
      <span className="text-lg font-semibold text-red-600 border-l-8 border-red-600 pl-2">
        Our products
      </span>
      <div className="flex items-center justify-between mb-4 mt-4">
        <div className="">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl">Explore our Products</h2>
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
      <div className="relative flex items-center">
        <div
          ref={scrollRef}
          className="flex space-x-4 scrollbar-hide px-6"
        >
          {products.map((product) => (
            <div key={product.id} className="w-60 h-80 flex-shrink-0 bg-white rounded-lg shadow-lg p-4 relative group">
              <div className="absolute top-2 bg-white p-2 text-center flex justify-center items-center right-2 space-x-2 text-gray-500">
                <button className="text-2xl hover:text-red-500">&#9825;</button>
                {/* <button className="text-xl hover:text-gray-700">&#128065;</button> */}
              </div>
              <div className="absolute top-10 bg-white p-1 text-center flex justify-center items-center right-2 space-x-2 text-gray-500">
                {/* <button className="text-xl hover:text-red-500">&#9825;</button> */}
                <button className="text-2xl hover:text-gray-700">&#128065;</button>
              </div>
              <div className="relative">
                <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {product.discount || '20%'}
                </span>
                <img src={product.image} alt={product.title} className="w-full h-32 object-contain mb-4" />
              </div>
              <h3 className="text-gray-800 font-semibold truncate">
                {product.title}
              </h3>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-red-500 font-bold">${product.price}</span>
                <span className="text-gray-400 line-through">${(parseFloat(product.price) + 20).toFixed(2)}</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">
                  {"★★★★★"}
                </span>
                <span className="text-gray-600 ml-2">(22)</span>
              </div>
              <button className="w-full mt-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 hidden group-hover:block">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex items-center mt-4">
        <div
          ref={scrollRef}
          className="flex space-x-4 scrollbar-hide px-6"
        >
          {products.map((product) => (
            <div key={product.id} className="w-60 h-80 flex-shrink-0 bg-white rounded-lg shadow-lg p-4 relative group">
              <div className="absolute top-2 bg-white p-2 text-center flex justify-center items-center right-2 space-x-2 text-gray-500">
                <button className="text-2xl hover:text-red-500">&#9825;</button>
                {/* <button className="text-xl hover:text-gray-700">&#128065;</button> */}
              </div>
              <div className="absolute top-10 bg-white p-1 text-center flex justify-center items-center right-2 space-x-2 text-gray-500">
                {/* <button className="text-xl hover:text-red-500">&#9825;</button> */}
                <button className="text-2xl hover:text-gray-700">&#128065;</button>
              </div>
              <div className="relative">
                <span className="absolute top-0 left-0 bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                  {product.discount || '20%'}
                </span>
                <img src={product.image} alt={product.title} className="w-full h-32 object-contain mb-4" />
              </div>
              <h3 className="text-gray-800 font-semibold truncate">
                {product.title}
              </h3>
              <div className="flex items-center space-x-2 mt-2">
                <span className="text-red-500 font-bold">${product.price}</span>
                <span className="text-gray-400 line-through">${(parseFloat(product.price) + 20).toFixed(2)}</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="text-yellow-400">
                  {"★★★★★"}
                </span>
                <span className="text-gray-600 ml-2">(22)</span>
              </div>
              <button className="w-full mt-4 py-2 bg-black text-white font-semibold rounded hover:bg-gray-800 hidden group-hover:block">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-center items-center pt-16'>
        <button className="text-white bg-red-600 font-semibold border px-8 py-4 rounded-sm mb-6">
          View All Products
        </button>
      </div>
    </div>
  );
}
