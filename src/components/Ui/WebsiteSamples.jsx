import React from 'react';
import './WebsiteSamples.css';

const WebsiteSamples = () => {
  const samples = [
    { title: 'Elegant', subtitle: 'Santorini', img: 'https://www.thereliablebuilders.co.uk/uploads/3dj5txkb/737x0_753x0/shutterstock_378599764.jpg' },
    { title: 'Progressive', subtitle: 'Stellar', img: 'https://tse1.mm.bing.net/th?id=OIP.pDT-R4OXvz13rMkhcMUd5QHaFJ&pid=Api&P=0&h=220' },
    { title: 'Modern', subtitle: 'Kaizen', img: 'https://www.tasbelize.com/wp-content/uploads/2023/08/Builders-hardware-catalog_Page_01-1024x791.png' },
    { title: 'Classic', subtitle: 'Azure', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1NQk6EgdugwQvvHIcQ7DqjfeXE-r-VN7g84ACmhFjRfjB-xnJya8xdjyQ_-u33EYEkXbyT5gdoJKfG5w7EUtmzH_azxlGha9fbkekFCgJCfSEPRXb9vw7-vKQDoM25npuRKswLZAv2JgNkGqNP1gBDIBDdJi3_-UfcRtpLtr39aBaQXl9HCIGefU5eA/s1500/Howdorealestateagentsgetpaid-571bd00c3df78c564045853d.jpg' },
  ];

  return (

    
    <section className="website-samples">
      <h2>See for yourself.</h2>
      <h3>WEBSITE SAMPLES</h3>
      <div className="samples-container">
        {samples.map((sample, index) => (
          <div className="sample-card" key={index}>
          <a href="https://empeiriaagency.com/"> <img src={sample.img} alt={`${sample.title} sample`} /></a> 
            <div className="sample-info">
              <h4>{sample.title}</h4>
              <p>{sample.subtitle}</p>
            <a href="https://travelistasagency.com/"><button className="view-sample-button">View Sample</button></a>  
            </div>
          </div>
        ))}
      </div>
    </section>
  
  );
};

export default WebsiteSamples;
