'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation';
import Navbar from "../components/Navbar";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    emailOrPhone: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Generate random values for address and phone
    const randomCity = "City" + Math.floor(Math.random() * 100);
    const randomStreet = "Street" + Math.floor(Math.random() * 100);
    const randomZipcode = Math.floor(Math.random() * 90000 + 10000).toString(); // Random 5-digit zipcode
    const randomPhone = `${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 900)}-${Math.floor(Math.random() * 9000) + 1000}`;

    // Call the fakestoreapi for user registration
    const res = await fetch('https://fakestoreapi.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: formData.emailOrPhone,
        username: formData.emailOrPhone.split('@')[0], // Using email username part as username
        password: formData.password,
        name: { firstname: formData.name.split(' ')[0], lastname: formData.name.split(' ')[1] },
        address: {
          city: randomCity,
          street: randomStreet,
          number: Math.floor(Math.random() * 100), // Random number for street number
          zipcode: randomZipcode,
          geolocation: { lat: (Math.random() * 180 - 90).toFixed(4), long: (Math.random() * 360 - 180).toFixed(4) } // Random geolocation
        },
        phone: randomPhone,
      }),
    });

    const data = await res.json();

    if (res.ok) { 
      router.push('/login');
    } else {
      setError(data.error || 'Signup failed');
    }
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="py-8 flex items-center justify-center">
        <div className="w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex">
          <div className="hidden md:flex md:w-[55%] bg-blue-100 items-center justify-center p-8">
            <img src="/images/shopping-cart-phone.png" alt="Shopping" className="max-h-96 object-contain" />
          </div>
          <div className="w-full md:w-[45%] p-16 flex justify-center">
            <div className="w-[70%]">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Create an account</h2>
              <p className="text-gray-600 mb-6">Enter your details below</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {["name", "emailOrPhone", "password"].map((field, index) => (
                  <div key={index} className="relative">
                    <input
                      type={field === "password" ? "password" : "text"}
                      name={field}
                      id={field}
                      value={formData[field]}
                      onChange={handleChange}
                      className="peer w-full border-b-2 border-gray-300 focus:border-red-500 focus:outline-none px-2 py-1"
                      required
                    />
                    <label
                      htmlFor={field}
                      className={`absolute left-2 -top-3 text-gray-500 text-sm bg-white px-1 transition-all duration-300
                        ${formData[field] ? "-translate-y-4" : "top-1/2 -translate-y-1/2"}`}
                    >
                      {field === "emailOrPhone" ? "Email or Phone Number" : field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                  </div>
                ))}
                {error && <div className="text-red-500 text-center">{error}</div>}
                <button className="w-full bg-red-500 text-white py-2 rounded mt-4">Create Account</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
