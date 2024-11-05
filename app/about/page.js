'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaUser, FaBriefcase, FaHeadset } from 'react-icons/fa';

const AboutPage = () => {
  const [teamMembers] = useState([
    { name: 'Tom Cruise', role: 'Founder & Chairman', image: '/images/tom.jpg' },
    { name: 'Emma Watson', role: 'Managing Director', image: '/images/emma.jpg' },
    { name: 'Will Smith', role: 'Product Designer', image: '/images/will.jpg' },
  ]);

  return (
    <div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Our Story Section */}
        <section className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
            Launched in 2015, Exclusive is South Asia's premier online shopping marketplace...
            </p>
            <Image
            src="/images/story-image.jpg"
            alt="Story Image"
            width={600}
            height={400}
            className="rounded-lg mx-auto"
            />
        </section>

        {/* Stats Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">
            <div className="stat-card">
            <FaUser className="h-8 w-8 mx-auto text-gray-500 hover:text-blue-500 transition duration-200" />
            <p className="text-2xl font-semibold">10.5k</p>
            <p className="text-gray-600">Sellers active on our site</p>
            </div>
            <div className="stat-card">
            <FaBriefcase className="h-8 w-8 mx-auto text-gray-500 hover:text-red-500 transition duration-200" />
            <p className="text-2xl font-semibold">33k</p>
            <p className="text-gray-600">Monthly Product Sale</p>
            </div>
            <div className="stat-card">
            <FaHeadset className="h-8 w-8 mx-auto text-gray-500 hover:text-green-500 transition duration-200" />
            <p className="text-2xl font-semibold">45.5k</p>
            <p className="text-gray-600">Customer active on our site</p>
            </div>
            <div className="stat-card">
            <FaUser className="h-8 w-8 mx-auto text-gray-500 hover:text-purple-500 transition duration-200" />
            <p className="text-2xl font-semibold">25k</p>
            <p className="text-gray-600">Annual gross sale in our site</p>
            </div>
        </section>

        {/* Team Section */}
        <section className="text-center mb-16">
            <h3 className="text-2xl font-semibold mb-8">Our Team</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-8">
            {teamMembers.map((member, index) => (
                <div
                key={index}
                className="team-card w-56 bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-200 p-4"
                >
                <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto"
                />
                <h4 className="text-xl font-medium mt-4">{member.name}</h4>
                <p className="text-gray-500">{member.role}</p>
                <div className="flex justify-center mt-4 gap-4">
                    <a href="#" className="text-gray-500 hover:text-blue-500">
                    <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-500">
                    <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-blue-500">
                    <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                </div>
            ))}
            </div>
        </section>

        {/* Features Section */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="feature-card">
            <Image src="/images/free-delivery.png" alt="Free Delivery" width={50} height={50} className="mx-auto" />
            <h4 className="text-lg font-medium mt-2">Free and Fast Delivery</h4>
            <p className="text-gray-500">Free delivery on all orders over $25</p>
            </div>
            <div className="feature-card">
            <Image src="/images/customer-support.png" alt="Customer Support" width={50} height={50} className="mx-auto" />
            <h4 className="text-lg font-medium mt-2">24/7 Customer Service</h4>
            <p className="text-gray-500">Friendly 24/7 customer support</p>
            </div>
            <div className="feature-card">
            <Image src="/images/money-back.png" alt="Money Back Guarantee" width={50} height={50} className="mx-auto" />
            <h4 className="text-lg font-medium mt-2">Money Back Guarantee</h4>
            <p className="text-gray-500">We offer a 30-day money back guarantee</p>
            </div>
        </section>
        </div>
    </div>
  );
};

export default AboutPage;
