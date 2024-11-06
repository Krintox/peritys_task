'use client';

import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef(null);

  // Fetch products on component mount
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim() === '') {
      setFilteredProducts([]);
      setShowResults(false);
      return;
    }

    const filtered = products.filter(product =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
    setShowResults(true);
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="w-full px-4 py-3 flex items-center justify-around border-b border-gray-200">
      {/* Logo */}
      <div className="font-bold text-xl">
        Exclusive
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <a href="/" className="text-sm hover:text-gray-600">Home</a>
        <a href="/contact" className="text-sm hover:text-gray-600">Contact</a>
        <a href="/about" className="text-sm hover:text-gray-600">About</a>
        <a href="/sign-up" className="text-sm hover:text-gray-600">Sign Up</a>
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <div className="relative" ref={searchRef}>
          <input 
            type="text" 
            placeholder="What are you looking for?"
            className="w-64 px-4 py-1.5 bg-gray-100 rounded-md text-sm focus:outline-none"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <AiOutlineSearch className="absolute right-3 top-2 h-4 w-4 text-gray-400" />
          
          {/* Search Results Dropdown */}
          {showResults && filteredProducts.length > 0 && (
            <div className="absolute mt-1 w-full bg-white rounded-md shadow-lg max-h-96 overflow-auto z-50 border border-gray-200">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="p-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-3"
                  onClick={() => {
                    setSearchTerm('');
                    setShowResults(false);
                    // Add your navigation logic here
                    console.log('Selected product:', product);
                  }}
                >
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-10 h-10 object-cover"
                  />
                  <div>
                    <div className="text-sm font-medium">{product.title}</div>
                    <div className="text-sm text-gray-600">${product.price}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="relative">
          <AiOutlineHeart className="h-5 w-5 text-gray-600 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
        </div>
        <div className="relative">
          <AiOutlineShoppingCart className="h-5 w-5 text-gray-600 cursor-pointer" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">0</span>
        </div>
        <AiOutlineUser className="h-5 w-5 text-gray-600 cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;