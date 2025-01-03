import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';


const Banner = () => {




  const bannerDataList = [
    {
      "_id": "673f0c2505a5e81bb859a7ae", "img": "https://res.cloudinary.com/deifi77os/image/upload/v1735095723/School%20Management%20System/homepage/n1jvbj5l2wju60q5nrdw.jpg", "banner_text": "Best Education System" },

    { "_id": "673f0c5355d270ee4b40f71d", "img": "https://res.cloudinary.com/deifi77os/image/upload/v1735095723/School%20Management%20System/homepage/m9qjueqy9j0h4bhwduqu.jpg", "banner_text": "Blend of Modernity and Tradition" },

    { "_id": "673f0f18303565cdf6edfc33", "img": "https://res.cloudinary.com/deifi77os/image/upload/v1735095723/School%20Management%20System/homepage/k99rt93tnsv4ibsxparc.jpg", "banner_text": "High-Quality Standards" }

  
  ]

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerDataList?.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [bannerDataList?.length]);

  useEffect(() => {
    AOS.refreshHard();
  }, [currentIndex]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative lg:mt-0 overflow-hidden">
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {bannerDataList &&
          bannerDataList.map((slide, index) => (
            <div
              key={index}
              className="lg:w-screen lg:h-[80vh] w-screen h-[42vh] flex-shrink-0 relative"
              style={{
                backgroundImage: `url(${slide?.img})`,
                backgroundSize: 'cover', // Updated to cover full width
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            >

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-25"></div>
            </div>
          ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-3 z-10">
        {bannerDataList?.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex
              ? 'bg-white border-2 border-white'
              : 'bg-gray-500'
              }`}
            onClick={() => goToSlide(index)}
            style={{
              outline: index === currentIndex ? '3px solid rgba(255, 255, 255, 0.5)' : 'none',
            }}
          />
        ))}
      </div>






      <div className="absolute bottom-44 left-0 right-0 py-6 text-white z-10">
        <div className="w-3/4 mx-auto">
          {/* Title */}
          <h2
            key={currentIndex} // Unique key to re-render and trigger animation
            className="lg:text-5xl text-3xl font-bold mb-4"
            data-aos="fade-up" // AOS fade-up effect
          >
            {bannerDataList[currentIndex]?.banner_text || 'No Banner Text'}
          </h2>
        </div>
      </div>


      {/* Bottom Buttons */}
      <div className="absolute lg:bottom-24 bottom-[90px] left-0 right-0 bg-themeBlue bg-opacity-70 lg:py-3 text-white z-10 font-semibold">
        <div className="flex lg:space-x-10 lg:w-3/4 mx-auto w-full lg:gap-3 px-1 lg:px-4">
          <button className="px-2 py-1 text-[8px] lg:text-xl text-center rounded-lg flex items-center gap-2">
            <Link to="/project-details">PROJECT DETAILS</Link>
          </button>
          <button className="px-2 py-1 text-[8px] lg:text-xl text-center rounded-lg flex items-center gap-2">
            <Link to="/booking-form">BOOKING FORM</Link>
          </button>
          <button className="px-2 py-1 text-[8px] lg:text-xl text-center rounded-lg">
            <Link to="/contact-us">CONTACT US</Link>
          </button>
          <button className="px-2 py-1 text-[8px] lg:text-xl text-center rounded-lg">
            <Link to="/about-us">ABOUT US</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;