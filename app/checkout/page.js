'use client';

import { useState } from "react";
import Navbar from "../components/Navbar";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phoneNumber: "",
    emailAddress: "",
  });
  const [paymentMethod, setPaymentMethod] = useState("bank");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
        <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Billing Details */}
            <div>
            <div className="text-sm text-gray-500 mb-2">Account / My Account / Product / View Cart / Checkout</div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Billing Details</h2>
            <form className="space-y-4">
                {["firstName", "companyName", "streetAddress", "apartment", "city", "phoneNumber", "emailAddress"].map(
                (field, index) => (
                    <div key={index}>
                    <label htmlFor={field} className="text-sm text-gray-700">
                        {field === "firstName"
                        ? "First Name*"
                        : field === "companyName"
                        ? "Company Name"
                        : field === "streetAddress"
                        ? "Street Address*"
                        : field === "apartment"
                        ? "Apartment, floor, etc. (optional)"
                        : field === "city"
                        ? "Town/City*"
                        : field === "phoneNumber"
                        ? "Phone Number*"
                        : "Email Address*"}
                    </label>
                    <input
                        type="text"
                        name={field}
                        id={field}
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-red-500"
                        required={field !== "companyName" && field !== "apartment"}
                    />
                    </div>
                )
                )}
                <div className="flex items-center gap-2">
                <input type="checkbox" id="saveInfo" className="text-red-500" />
                <label htmlFor="saveInfo" className="text-sm text-gray-600">
                    Save this information for faster check-out next time
                </label>
                </div>
            </form>
            </div>

            {/* Order Summary */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-4">
                {/* Product List */}
                <div className="flex items-center gap-4">
                <img src="https://via.placeholder.com/50" alt="LCD Monitor" className="w-12 h-12 object-cover rounded" />
                <span className="flex-1 text-gray-700">LCD Monitor</span>
                <span className="font-semibold text-gray-800">$650</span>
                </div>
                <div className="flex items-center gap-4">
                <img src="https://via.placeholder.com/50" alt="H1 Gamepad" className="w-12 h-12 object-cover rounded" />
                <span className="flex-1 text-gray-700">H1 Gamepad</span>
                <span className="font-semibold text-gray-800">$1100</span>
                </div>

                {/* Price Breakdown */}
                <div className="border-t border-gray-300 pt-4">
                <div className="flex justify-between text-gray-700">
                    <span>Subtotal:</span>
                    <span>$1750</span>
                </div>
                <div className="flex justify-between text-gray-700">
                    <span>Shipping:</span>
                    <span>Free</span>
                </div>
                <div className="flex justify-between font-semibold text-gray-800 mt-2">
                    <span>Total:</span>
                    <span>$1750</span>
                </div>
                </div>

                {/* Payment Method */}
                <div className="mt-4">
                <label className="flex items-center gap-2">
                    <input
                    type="radio"
                    name="paymentMethod"
                    value="bank"
                    checked={paymentMethod === "bank"}
                    onChange={() => setPaymentMethod("bank")}
                    />
                    <span className="text-gray-700">Bank</span>
                    <img src="https://via.placeholder.com/50" alt="Bank" className="h-6" />
                </label>
                <label className="flex items-center gap-2 mt-2">
                    <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    />
                    <span className="text-gray-700">Cash on delivery</span>
                </label>
                </div>

                {/* Coupon Code */}
                <div className="flex items-center gap-2 mt-4">
                <input
                    type="text"
                    placeholder="Coupon Code"
                    className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-red-500"
                />
                <button className="bg-gray-200 px-4 py-2 rounded text-gray-700 hover:bg-gray-300">Apply Coupon</button>
                </div>

                {/* Place Order Button */}
                <button className="w-full bg-red-500 text-white py-3 rounded mt-6 hover:bg-red-600">Place Order</button>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
};

export default CheckoutPage;
