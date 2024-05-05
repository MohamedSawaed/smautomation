import React from 'react';
import HomeSection from '../sections/HomeSection';
import ServicesSection from '../sections/ServicesSection';
import WhyChooseUsSection from '../sections/WhyChooseUsSection';
import VisionSection from '../sections/VisionSection';
import Bid from '../sections/Bid';
import ContactUs from '../sections/ContactUs';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <HomeSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <VisionSection />
      <Bid />
      
      {/* More sections can be added here */}
    </div>
  );
};

export default Home;
