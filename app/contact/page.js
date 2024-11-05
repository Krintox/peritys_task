'use client';

import { useState } from "react";
import Navbar from "../components/Navbar";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div>
        <div className="min-h-screen p-8">
        <div className="w-[85%] mx-auto">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm text-gray-500">
            Home / <span className="text-red-500">Contact</span>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 flex items-center space-x-4">
                <div className="text-red-500 text-2xl">&#9742;</div>
                <h3 className="text-lg font-semibold">Call To Us</h3>
                </div>
                <p className="text-gray-700 mb-4">
                We are available 24/7, 7 days a week.
                </p>
                <p className="text-gray-700 font-semibold">Phone: +8801611122222</p>
                <hr className="my-6 border-gray-300" />

                <div className="mb-4 flex items-center space-x-4">
                <div className="text-red-500 text-2xl">&#9993;</div>
                <h3 className="text-lg font-semibold">Write To Us</h3>
                </div>
                <p className="text-gray-700 mb-4">
                Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="text-gray-700">Emails: customer@exclusive.com</p>
                <p className="text-gray-700">Emails: support@exclusive.com</p>
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 bg-white p-8 rounded-lg shadow-md">
                <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name, Email, and Phone Fields */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name *"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded px-4 py-2 placeholder-gray-400 focus:outline-none focus:border-red-500"
                    />
                    </div>
                    <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email *"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded px-4 py-2 placeholder-gray-400 focus:outline-none focus:border-red-500"
                    />
                    </div>
                    <div>
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone *"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded px-4 py-2 placeholder-gray-400 focus:outline-none focus:border-red-500"
                    />
                    </div>
                </div>

                {/* Message Field */}
                <div>
                    <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded px-4 py-2 h-32 placeholder-gray-400 focus:outline-none focus:border-red-500"
                    ></textarea>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-200"
                >
                    Send Message
                </button>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default Contact;
