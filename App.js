
import './App.css';
import ContactForm from './components/Ui/ContactForm';

// import {BrowserRouter,Router,Routes,Route} from 'react-router-dom'
import HeroSection from './components/Ui/HeroSection';
import WebsiteSamples from './components/Ui/WebsiteSamples';
import ServiceSection from './components/Ui/ServiceSection';
import AboutUs from './components/Ui/AboutUs';
import Footer from './components/Ui/Footer';
import Blog from './components/Ui/Blog'
import BrandsSlider from './components/Ui/BrandsSlider';


function App() {
  return <>


  <HeroSection  />
  <WebsiteSamples />
  <ServiceSection /> 
  <AboutUs />
  <Blog />
  <BrandsSlider/>
  <ContactForm />
  <Footer />


  </>

  
}




export default App;
