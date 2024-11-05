import Sidebar from './components/SideBar';
import HeroBanner from './components/HeroBanner';
import Navbar from './components/Navbar'; // Assuming you have Navbar component from previous code
import FlashSales from './components/FlashSales';
import BestSellingProduct from './components/BestSellingProduct';
import ExploreOurProducts from './components/ExploreOurProducts';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <div className="container mx-auto flex flex-col">
        <div className="flex">
          <Sidebar />
          <HeroBanner />
        </div>
        <FlashSales />
        <BestSellingProduct />
        <ExploreOurProducts />
      </div>
    </div>
  );
}

