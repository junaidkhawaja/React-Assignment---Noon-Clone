import PrimarySearchAppBar from './Components/navbar'
import HorizontalBanner from './Components/horizontalBanner'
import './App.css'
import SwiperDef from './Components/Swiper'
import SwiperCarousel from './Components/SwiperCarousel'
import Reasons from './Components/Reasons'
import MegaDeals from './Components/MegaDeals'
import Infocus from './Components/Infocus'
import ProductsCarousel from './Components/ProductsCarousel'
import FinalBanner from './Components/FinalBanner'
import Footer from './Components/Footer'

function App() {
  return <>
  <PrimarySearchAppBar />
  <HorizontalBanner />
  <SwiperDef />  
  <SwiperCarousel />
  <div className='mightyflex'>
  <Reasons />
  <MegaDeals />
  <Infocus />
  </div>
  <ProductsCarousel />
  <FinalBanner />
  <Footer />
  </>
}

export default App
