// src/components/Ui/BrandsSlider.jsx
import React from 'react';
import Slider from 'react-slick';
import './BrandsSlider.css'; // Import your CSS for custom styling

const brands = [
  { id: 1, name: 'Brand1', logo: 'https://cdn.dribbble.com/users/2102410/screenshots/10770027/dm_4x.jpg' },
  { id: 2, name: 'Brand2', logo: 'https://www.connectintegratedmarketing.com/wp-content/uploads/2021/03/1529558344686.jpg' },
  { id: 3, name: 'Brand3', logo: 'https://influencermarketinghub.com/wp-content/uploads/2020/02/Best-B2B-Branding-Agency-NYC-Transform-Your-Brand.jpg' },
  { id: 4, name: 'Brand4', logo: 'https://www.thebrandingjournal.com/wp-content/uploads/2016/06/what-is-a-branding-agency-the-branding-journal.png' },
  { id: 5, name: 'Brand5', logo: 'https://hannawears.com/wp-content/uploads/2020/06/pr-agencies.jpg' },
  { id: 6, name: 'Brand6', logo: 'https://www.sws.co.id/wp-content/uploads/2021/07/Branding-Agency-dalam-blog.jpg' },
];

const BrandsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="brands-slider">
      <Slider {...settings}>
        {brands.map(brand => (
          <div key={brand.id} className="brand-item">
            <img src={brand.logo} alt={brand.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BrandsSlider;
