'use client';

import { useState } from "react";
import Navbar from "../components/Navbar";
import BestSellingProduct from "../components/BestSellingProduct";

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState("https://via.placeholder.com/500");
  const [quantity, setQuantity] = useState(1);
  const [hovered, setHovered] = useState(false);

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AhppaHoR-ZxSUYS3ZLIWf2Dzi0Qlp1Sulg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrTmJ4ZXDAgSZB4Au4MGsESDLUy_VLDiDWXA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeC0GnhIPx337VNZFnpSL1Vnn9OmaJjh8W-w&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZTeraRmnMefI9PaLpspduaQ9gxRN7lv2shQ&s",
  ];

  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) =>
      type === "increment" ? prevQuantity + 1 : prevQuantity > 1 ? prevQuantity - 1 : 1
    );
  };

  return (
    <div>
        <div className="max-w-6xl mx-auto p-6">
        <div className="flex gap-6">
            {/* Left Side Images */}
            <div className="flex flex-col gap-4">
            {images.map((image, index) => (
                <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                onMouseEnter={() => setSelectedImage(image)}
                className="w-20 h-20 object-cover cursor-pointer border border-gray-200 hover:border-gray-400"
                />
            ))}
            </div>

            {/* Main Image */}
            <div
            className="flex-1 relative overflow-hidden"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            >
            <img
                src={selectedImage}
                alt="Selected product"
                className={`object-cover transition-transform duration-300 ${hovered ? "scale-110" : "scale-100"}`}
            />
            </div>

            {/* Right Side Details */}
            <div className="w-1/3">
            <h1 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h1>
            <div className="flex items-center my-2">
                <span className="text-yellow-500">★★★★★</span>
                <span className="text-gray-500 ml-2">(150 Reviews)</span>
                <span className="ml-4 text-green-600 font-semibold">In Stock</span>
            </div>
            <p className="text-2xl font-bold mb-4">$192.00</p>
            <p className="text-gray-600 mb-4">
                PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal. Pressure sensitive.
            </p>

            {/* Color Options */}
            <div className="flex items-center gap-2 mb-4">
                <span className="font-semibold">Colours:</span>
                <button className="w-5 h-5 bg-blue-500 rounded-full border-2 border-gray-300"></button>
                <button className="w-5 h-5 bg-red-500 rounded-full border-2 border-gray-300"></button>
            </div>

            {/* Size Options */}
            <div className="flex items-center gap-2 mb-4">
                <span className="font-semibold">Size:</span>
                <button className="px-3 py-1 border rounded hover:bg-gray-200">XS</button>
                <button className="px-3 py-1 border rounded hover:bg-gray-200">S</button>
                <button className="px-3 py-1 border rounded bg-red-500 text-white">M</button>
                <button className="px-3 py-1 border rounded hover:bg-gray-200">L</button>
                <button className="px-3 py-1 border rounded hover:bg-gray-200">XL</button>
            </div>

            {/* Quantity & Buy Now */}
            <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center border rounded">
                <button
                    onClick={() => handleQuantityChange("decrement")}
                    className="px-3 py-1 text-xl"
                >
                    -
                </button>
                <span className="px-4">{quantity}</span>
                <button
                    onClick={() => handleQuantityChange("increment")}
                    className="px-3 py-1 text-xl"
                >
                    +
                </button>
                </div>
                <button className="bg-red-500 text-white py-2 px-6 rounded hover:bg-red-600">
                Buy Now
                </button>
                <button className="text-gray-500 hover:text-red-500 text-2xl">&#9825;</button>
            </div>

            {/* Delivery Info */}
            <div className="border-t pt-4 mt-4">
                <div className="flex items-center mb-2">
                <span className="text-gray-700">🚚 Free Delivery</span>
                <span className="text-gray-500 ml-2 text-sm">Enter your postal code for Delivery Availability</span>
                </div>
                <div className="flex items-center">
                <span className="text-gray-700">↩️ Return Delivery</span>
                <span className="text-gray-500 ml-2 text-sm">Free 30 Days Delivery Returns. <a href="#" className="text-blue-500">Details</a></span>
                </div>
            </div>
            </div>
        </div>
        </div>
        <BestSellingProduct />
    </div>
  );
};

export default ProductPage;
