'use client';

import { useState } from "react";
import Navbar from "../components/Navbar";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "Md",
    lastName: "Rimel",
    email: "rimel111@gmail.com",
    address: "Kingston, 5236, United State",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
        <div className="min-h-screen p-8">
        <div className="w-[85%] mx-auto">
            {/* Breadcrumb and Welcome Message */}
            <div className="flex justify-between items-center mb-6">
            <span className="text-sm text-gray-500">Home / My Account</span>
            <span className="text-sm text-gray-500">
                Welcome! <span className="text-red-500 font-semibold">Md Rimel</span>
            </span>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="space-y-6 text-gray-700">
                <div>
                <h3 className="font-semibold mb-2">Manage My Account</h3>
                <ul className="space-y-1">
                    <li className="text-red-500 font-semibold">My Profile</li>
                    <li className="hover:text-red-500 cursor-pointer">Address Book</li>
                    <li className="hover:text-red-500 cursor-pointer">My Payment Options</li>
                </ul>
                </div>
                <div>
                <h3 className="font-semibold mb-2">My Orders</h3>
                <ul className="space-y-1">
                    <li className="hover:text-red-500 cursor-pointer">My Returns</li>
                    <li className="hover:text-red-500 cursor-pointer">My Cancellations</li>
                </ul>
                </div>
                <div>
                <h3 className="font-semibold mb-2">My Wishlist</h3>
                </div>
            </aside>

            {/* Edit Profile Form */}
            <div className="md:col-span-3 bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-red-500 mb-6">Edit Your Profile</h2>
                <form className="space-y-4">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                    <label className="text-sm text-gray-700">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-red-500"
                    />
                    </div>
                    <div>
                    <label className="text-sm text-gray-700">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-red-500"
                    />
                    </div>
                </div>

                {/* Email and Address Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                    <label className="text-sm text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-red-500"
                    />
                    </div>
                    <div>
                    <label className="text-sm text-gray-700">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-red-500"
                    />
                    </div>
                </div>

                {/* Password Change Fields */}
                <div className="text-red-500 font-semibold mt-4">Password Changes</div>
                <div className="grid grid-cols-1 gap-4">
                    <div>
                    <label className="text-sm text-gray-700">Current Password</label>
                    <input
                        type="password"
                        name="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-red-500"
                    />
                    </div>
                    <div>
                    <label className="text-sm text-gray-700">New Password</label>
                    <input
                        type="password"
                        name="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-red-500"
                    />
                    </div>
                    <div>
                    <label className="text-sm text-gray-700">Confirm New Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-red-500"
                    />
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between mt-6">
                    <button
                    type="button"
                    className="text-gray-500 hover:text-red-500 transition-colors duration-200"
                    >
                    Cancel
                    </button>
                    <button
                    type="submit"
                    className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors duration-200"
                    >
                    Save Changes
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default EditProfile;
