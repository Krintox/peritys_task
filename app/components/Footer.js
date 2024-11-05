'use client';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Exclusive Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Exclusive</h2>
            <p className="mb-2">Subscribe</p>
            <p className="mb-4">Get 10% off your first order</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md bg-gray-800 text-white mb-2"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Subscribe
            </button>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Support</h2>
            <p className="mb-2">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p className="mb-2">exclusive@gmail.com</p>
            <p className="mb-2">+88015-88888-9999</p>
          </div>

          {/* Account Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Account</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-blue-500">My Account</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-500">Login / Register</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-500">Cart</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-500">Wishlist</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-500">Shop</a></li>
            </ul>
          </div>

          {/* Quick Link Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Link</h2>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-500">Terms Of Use</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-500">FAQ</a></li>
              <li className="mb-2"><a href="#" className="hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          {/* Download App Section */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Download App</h2>
            <p className="mb-2">Save $3 with App New User Only</p>
            <div className="flex gap-4">
              <img src="/images/google-play.png" alt="Get it on Google Play" className="w-32" />
              <img src="/images/app-store.png" alt="Download on the App Store" className="w-32" />
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="hover:text-blue-500">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p>© Copyright Rimel 2022. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
