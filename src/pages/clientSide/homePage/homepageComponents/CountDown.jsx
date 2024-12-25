import React from 'react';

const CountDown = () => {
  return (
    <div>
      <section className="text-white body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div className="w-full sm:p-4 px-4 mb-6">
              <h1 className="title-font font-medium text-3xl mb-2 text-white">Our Statistics At Once</h1>
              <div className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-white">50</h2>
              <p className="leading-relaxed">PROFESSIONAL INSTRUCTORS</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-white">18</h2>
              <p className="leading-relaxed">NEW COURSES EVERY YEAR</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-white">35</h2>
              <p className="leading-relaxed">LIVE SESSIONS EVERY MONTH</p>
            </div>
            <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 className="title-font font-medium text-3xl text-white">4k</h2>
              <p className="leading-relaxed">REGISTERED STUDENTS</p>
            </div>
          </div>
          <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
            <img className="object-cover object-center w-full h-full" src="https://res.cloudinary.com/deifi77os/image/upload/v1735098726/School%20Management%20System/homepage/o5nfnp7a5kto40zcnmzm.png" alt="stats"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CountDown;