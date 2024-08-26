


// import React, { useState } from 'react';
// import '../../Style/HeroSection.css';
// import heroDarkImg from '../../images/1.jpeg';

// const HeroSection = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//     if (!isOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }
//   };

//   return (
//     <header className="hero-section">
//       <div className="container">
//         <nav className={`navbar  ${isOpen ? 'open' : ''}`}>
//           <div className="logo">
//             <h1>AGENCY</h1>
//           </div>
//           <div className={`toggle-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//             <span className="bar"></span>
//             <span className="bar"></span>
//             <span className="bar"></span>
//           </div>
//           <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
//             <li><a href="#home">Home</a></li>
//             <li><a href="#services">Services</a></li>
//             <li><a href="#about">About Us</a></li>
//             <li><a href="#portfolio">Portfolio</a></li>
//             <li><a href="#contact">Contact</a></li>
//           </ul>
//         </nav>
//         <div className="hero-content">
//           <div className="hero-text">
//             <h1>Strategic Perspective</h1>
//             <p>We build delightful, consumer-grade experiences. We're a creative design agency in San Francisco.</p>
//             <button className="cta-button">Get Started</button>
//           </div>
//           <div className="hero-image">
//             <img src={heroDarkImg} alt="hero-img" />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default HeroSection;

import React, { useState } from 'react';
import '../../Style/HeroSection.css';
import heroDarkImg1 from '../../images/1.jpeg';
import heroDarkImg2 from '../../images/2.jpg';
import heroDarkImg3 from '../../images/3.jpg';
import Slider from 'react-slick';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const textSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const imageSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <header className="hero-section">
      <div className="container">
        <nav className={`navbar ${isOpen ? 'open' : ''}`}>
          <div className="logo">
            <h1>AGENCY</h1>
          </div>
          <div className={`toggle-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#aboutus">AboutUs</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <Slider {...textSliderSettings}>
              <div><h1>Strategic Perspective</h1></div>
              <div><h1>Innovative Solutions</h1></div>
              <div><h1>Creative Design</h1></div>
            </Slider>
            <p>We build delightful, consumer-grade experiences. We're a creative design agency in San Francisco.</p>
            <button className="cta-button">Get Started</button>
          </div>
          <div className="hero-image">
            <Slider {...imageSliderSettings}>
              <div><img src={heroDarkImg1} alt="hero-img" className="circular-image" /></div>
              <div><img src={heroDarkImg2} alt="hero-img" className="circular-image" /></div>
              <div><img src={heroDarkImg3} alt="hero-img" className="circular-image" /></div>
            </Slider>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
