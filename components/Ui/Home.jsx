import React from 'react'
import HeroSection from './HeroSection'
import ServiceSection from './ServiceSection'
import AboutUs from './AboutUs'
import Blog from './Blogs'
import ContactForm from './ContactForm'
import SectionBrands from './SectionBrands'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ServiceSection />
      <AboutUs/>
      <Blog/>
      <SectionBrands/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default Home
