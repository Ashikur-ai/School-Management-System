import React from 'react';
import { IonIcon } from '@ionic/react';
import { logoInstagram, logoFacebook, logoTwitter, logoLinkedin } from 'ionicons/icons';
import { Link } from 'react-router-dom';


const TopEvents = () => {
  const cards = [
    {
      name: "Cultural Event",
      image: "https://res.cloudinary.com/deifi77os/image/upload/v1735105073/School%20Management%20System/homepage/vkcqdi3q4e7xh3tqoxyz.webp",
      
    },
    {
      name: "Cultural Fest",
      image: "https://res.cloudinary.com/deifi77os/image/upload/v1735105124/School%20Management%20System/homepage/n5iip457yxisk3p6nhzv.webp",
    },
    {
      name: "Coding Event",
      image: "https://res.cloudinary.com/deifi77os/image/upload/v1735105173/School%20Management%20System/homepage/ugy5jp2iegdw9aiudg2g.jpg",
    },
    {
      name: "Nursing Event",
      image: "https://res.cloudinary.com/deifi77os/image/upload/v1735105314/School%20Management%20System/homepage/bkyvawqgyr1yofg5uenb.jpg",

    },
    {
      name: "Music Festival",
      image: "https://res.cloudinary.com/deifi77os/image/upload/v1735105347/School%20Management%20System/homepage/pd2pnupvi1giezkye1ax.jpg",

    },

  ];

  return (
    <>
      <p className=' text-themeBlue text-3xl text-center lg:mt-10 font-bold'>Have a look<br /> <span className=' font-bold text-5xl'>Our Institute's Events</span></p>

      <div className="flex my-5 justify-center items-center py-5 bg-gradient-to-r from-universe_primary to-universe_secondary">
        <div className="flex">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`relative w-52 h-[500px] bg-cover bg-center rounded-3xl overflow-hidden transition-all duration-500 hover:w-96 cursor-pointer border shadow-lg`}
              style={{ backgroundImage: `url(${card.image})` }}
            >
              {/* Gradient overlay that appears on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent rounded-b-3xl opacity-0 hover:opacity-100 transition-opacity duration-500">
                {/* Test text that becomes visible on hover */}
                <div>
                  <p className="absolute text-4xl text-white w-full text-center bottom-0 transform -translate-y-1/2 hover:text-blue-700">
                    {card.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </>
  );
};

export default TopEvents;


