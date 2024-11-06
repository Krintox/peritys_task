// components/Footer.js
import Image from 'next/image'
import googlePlayBadge from '../components/images/googlePlay.png'
import appStoreBadge from '../components/images/AppStore.png'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white p-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 text-sm">
        
        {/* Column 1: Exclusive and Subscribe */}
        <div>
          <h3 className="text-lg font-bold mb-4">Exclusive</h3>
          <p className="mb-4">Subscribe</p>
          <p className="mb-4">Get 10% off your first order</p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-white text-black px-4 py-2 rounded-l w-full focus:outline-none"
            />
            <button className="bg-gray-500 px-4 py-2 rounded-r">
              ➤
            </button>
          </form>
        </div>

        {/* Column 2: Support */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <p>111 Bijoy sarani, Dhaka,</p>
          <p>DH 1515, Bangladesh.</p>
          <p className="mt-2">exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Column 3: Account */}
        <div>
          <h3 className="text-lg font-bold mb-4">Account</h3>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        {/* Column 4: Quick Link */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Link</h3>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        {/* Column 5: Download App */}
        <div>
          <h3 className="text-lg font-bold mb-4">Download App</h3>
          <p>Save $3 with App New User Only</p>
          <div className="flex items-center space-x-4 my-4">
            <Image src={googlePlayBadge} alt="Google Play" width={120} height={40} />
            <Image src={appStoreBadge} alt="App Store" width={120} height={40} />
          </div>
          <div className="flex space-x-4 mt-4">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>
    </footer>
  )
}
