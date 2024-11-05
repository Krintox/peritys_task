'use client';

import { useState } from "react";
import Navbar from "../components/Navbar";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "LCD Monitor", price: 650, quantity: 1, image: "/images/lcd-monitor.jpg" },
    { id: 2, name: "H1 Gamepad", price: 550, quantity: 2, image: "/images/h1-gamepad.jpg" },
  ]);
  const [coupon, setCoupon] = useState("");

  const handleQuantityChange = (id, newQuantity) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = subtotal > 0 ? "Free" : 0;
  const total = subtotal;

  return (
    <div>
        <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-xl font-semibold mb-4">Cart</h2>
        <table className="w-full border-collapse border border-gray-200">
            <thead>
            <tr className="border-b">
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-left">Price</th>
                <th className="p-3 text-left">Quantity</th>
                <th className="p-3 text-left">Subtotal</th>
            </tr>
            </thead>
            <tbody>
            {cartItems.map((item) => (
                <tr key={item.id} className="border-b">
                <td className="p-3 flex items-center">
                    <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 mr-2">
                    &#10006;
                    </button>
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-3" />
                    {item.name}
                </td>
                <td className="p-3">${item.price}</td>
                <td className="p-3">
                    <select
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                    className="border rounded px-2 py-1"
                    >
                    {[...Array(10).keys()].map((n) => (
                        <option key={n + 1} value={n + 1}>
                        {n + 1}
                        </option>
                    ))}
                    </select>
                </td>
                <td className="p-3">${item.price * item.quantity}</td>
                </tr>
            ))}
            </tbody>
        </table>

        <div className="flex justify-between mt-6">
            <button className="border px-4 py-2 rounded">Return To Shop</button>
            <button className="border px-4 py-2 rounded">Update Cart</button>
        </div>

        <div className="flex gap-6 mt-6">
            <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
                <input
                type="text"
                placeholder="Coupon Code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="border rounded px-4 py-2 w-full"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded">Apply Coupon</button>
            </div>
            </div>

            {/* Cart Total Summary */}
            <div className="w-1/3 border border-gray-200 p-4">
            <h3 className="font-semibold text-lg mb-4">Cart Total</h3>
            <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>${subtotal}</span>
            </div>
            <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span>{shipping}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>${total}</span>
            </div>
            <button className="bg-red-500 text-white w-full py-2 mt-4 rounded">
                Proceed to checkout
            </button>
            </div>
        </div>
        </div>
    </div>
  );
};

export default CartPage;
