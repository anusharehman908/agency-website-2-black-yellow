import React from 'react';
import '../../Style/ServiceSection.css' // Make sure to create this CSS file

const services = [
  {
    title: 'Service 1',
    description: 'Business Agency Team Working on New Ideas Free Stock Photo | picjumbo',
    imgSrc: 'https://th.bing.com/th/id/R.31c3c4f8e45d627f6fa9091aed18c6f4?rik=kQkn%2bnYC0fyEiQ&pid=ImgRaw&r=0',
  },
  {
    title: 'Service 2',
    description: 'How a Travel Agency is Staying Relevant in the Age of Online Booking ...',
    imgSrc: 'https://th.bing.com/th/id/OIP.5Z2_q94OnwWkgB7iQqPW-gHaE8?rs=1&pid=ImgDetMain',
  },
  {
    title: 'Service 3',
    description: 'What Goes Into Starting Your Own Digital Agency? | FREEYORK',
    imgSrc: 'https://th.bing.com/th/id/R.43e9201e2082275303ba99576a6c41c0?rik=BbtyM9eezeCM0g&pid=ImgRaw&r=0',
  },
  // Add more services as needed
];

const ServiceSection = () => {
  return (
    <div className='a'>
        <h1>Services</h1>
    <div className="service-section" id="services">
    
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <img src={service.imgSrc} alt={service.title} className="service-image" />
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ServiceSection;
