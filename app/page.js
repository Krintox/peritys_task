import Sidebar from './components/SideBar';
import HeroBanner from './components/HeroBanner';
import Navbar from './components/Navbar'; // Assuming you have Navbar component from previous code
import FlashSales from './components/FlashSales';
import BestSellingProduct from './components/BestSellingProduct';
import ExploreOurProducts from './components/ExploreOurProducts';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Eyme from './components/Cat_eyme';
import NewArrive from './components/NewArrival';
import Customer from './components/Customer';

export default function Home() {
  return (
    <div>
      <div className="container mx-auto flex flex-col">
        <div className="flex justify-center items-center py-6">
          <HeroBanner />
        </div>
        <FlashSales />
        <Categories />
        <BestSellingProduct />
        <Eyme />
        <ExploreOurProducts />
        <NewArrive />
        <Customer />
      </div>
    </div>
  );
}

