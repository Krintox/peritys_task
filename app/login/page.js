'use client';

import { useState } from "react";
import { signIn } from "next-auth/react";
import Navbar from "../components/Navbar";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [error, setError] = useState(null); // To store error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error messages
    setError(null);

    const res = await signIn("credentials", {
      redirect: false,
      emailOrPhone: formData.emailOrPhone,
      password: formData.password,
    });

    console.log(res); // Log the result to debug

    if (res?.error) {
      setError("Invalid credentials, please try again.");
      alert("Invalid credentials");
    } else if (res?.ok) {
      // Redirect to the dashboard or desired page upon successful login
      window.location.href = "/"; // Update with your desired route
    } else {
      // Handle unexpected response from signIn
      setError("Something went wrong, please try again later.");
    }
  };

  return (
    <div>
      <div className="py-8 flex items-center justify-center">
        <div className="w-full mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex">
          {/* Image Section */}
          <div className="hidden md:flex md:w-[55%] bg-blue-100 items-center justify-center p-8">
            <img
              src="/images/shopping-cart-phone.png"
              alt="Shopping"
              className="max-h-96 object-contain"
            />
          </div>

          {/* Form Section */}
          <div className="w-full md:w-[45%] p-16 flex justify-center">
            <div className="w-[70%]">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Log in to your account
              </h2>
              <p className="text-gray-600 mb-6">Enter your credentials below</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Input with Animated Label */}
                {["emailOrPhone", "password"].map((field, index) => (
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
                      {field === "emailOrPhone"
                        ? "Email or Phone Number"
                        : "Password"}
                    </label>
                  </div>
                ))}

                {/* Display Error Message */}
                {error && (
                  <p className="text-red-500 text-center">{error}</p>
                )}

                {/* Log in Button */}
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-2 rounded mt-4"
                >
                  Log In
                </button>

                {/* Log in with Google */}
                <button
                  className="w-full border py-2 rounded flex items-center justify-center gap-2 mt-2"
                  onClick={() => signIn("google")}
                >
                  <img
                    src="/images/google-icon.png"
                    alt="Google"
                    className="w-5 h-5"
                  />
                  <span>Log in with Google</span>
                </button>

                {/* Don't have an account */}
                <p className="text-center text-gray-500 mt-4">
                  Don't have an account?{" "}
                  <a href="/signup" className="text-red-500 font-semibold">
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
