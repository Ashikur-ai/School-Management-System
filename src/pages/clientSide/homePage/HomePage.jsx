import React from 'react'
import Banner from './homepageComponents/Banner'
import Welcome from './homepageComponents/Welcome'
import Card from './homepageComponents/Card'
import { motion } from "framer-motion";
import TopEvents from './homepageComponents/TopEvents';
import ProfileCard from './homepageComponents/ProfileCard';
import LatestPost from './homepageComponents/LatestPost';
import CountDown from './homepageComponents/CountDown';
import Testimonial from './homepageComponents/Testimonial';
import PhotoGallery from './homepageComponents/PhotoGallery';


const HomePage = () => {

  const scrollAnimationVariants = {
    hidden: { opacity: 0, y: 2 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 50
      }
    }
  };

  return (
    <div>
      <Banner />
      <Welcome />

     
      {/* top events  */}
      <motion.div

        className="lg:block hidden pt-1"
        initial="hidden"
        whileInView="visible"
        variants={scrollAnimationVariants}
        viewport={{ once: true, amount: 0.2 }}>
        <TopEvents/>
      </motion.div>

      {/* course section  */}
      <div className="">
        <div className="w-10/12 mx-auto">
          <p className="font-bold text-themeBlue text-4xl my-10">
            Featured Courses
          </p>
        </div>

        <div className="lg:flex gap-10 w-10/12 mx-auto ">
          <Card
            title={"Learn PHP with Laravel Framework"}
            image={"https://res.cloudinary.com/deifi77os/image/upload/v1735102826/School%20Management%20System/homepage/emmnkmypax7nj5zhiewe.png"}
            description={"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae pariatur consectetur numquam, sequi mollitia dicta, non labore quae minus rerum recusandae aperiam. Accusamus est minima quaerat eaque. Temporibus iure eum quidem ut."}
          />


          <Card
            title={"Learn HTML and CSS"}
            image={"https://res.cloudinary.com/deifi77os/image/upload/v1735102896/School%20Management%20System/homepage/iedcwcdtjzzzqazqnt0u.jpg"}
            description={"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae pariatur consectetur numquam, sequi mollitia dicta, non labore quae minus rerum recusandae aperiam. Accusamus est minima quaerat eaque. Temporibus iure eum quidem ut."}
          />

          <Card
            title={"Learn JavaScript and Node"}
            image={"https://res.cloudinary.com/deifi77os/image/upload/v1735103055/School%20Management%20System/homepage/e34ywgwfvp97ob6lerp1.jpg"}
            description={"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae pariatur consectetur numquam, sequi mollitia dicta, non labore quae minus rerum recusandae aperiam. Accusamus est minima quaerat eaque. Temporibus iure eum quidem ut."}
          />


          <Card
            title={"Learn React and Next.js"}
            image={"https://res.cloudinary.com/deifi77os/image/upload/v1735103095/School%20Management%20System/homepage/vthqsnjgaoxfnfrphbay.jpg"}
            description={"  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae pariatur consectetur numquam, sequi mollitia dicta, non labore quae minus rerum recusandae aperiam. Accusamus est minima quaerat eaque. Temporibus iure eum quidem ut."}
          />

        </div>
      </div>

      {/* Teacher Section  */}
      <div className="">
        <ProfileCard />
      </div>

      <div className="">
        <LatestPost/>
      </div>

      <div className="bg-themeBlue">
        <CountDown/>
      </div>

      <div className="mt-20">
        <p className="text-center text-4xl my-4 font-bold">Testimonials</p>
        <Testimonial/>
      </div>

      <div className="">
        <PhotoGallery/>
      </div>


    </div>
  )
}

export default HomePage
