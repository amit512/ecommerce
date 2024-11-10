
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import FlashSales from './components/FlashSales';
//import Categories from './components/Categories';
//import BestSelling from './components/BestSelling';
//import ExploreProducts from './components/ExploreProducts';
//import NewArrival from './components/NewArrival';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner />
    <FlashSales />
    <Footer />
    </div>
  );
}

export default App;
