import React from 'react';

const PhotoGallery = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          <div className="flex w-full mb-20 flex-wrap">
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-themeBlue  lg:w-1/3 lg:mb-0 mb-4">Our Photo Gallery</h1>
            <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
          </div>
          <div className="flex flex-wrap md:-m-2 -m-1">
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://res.cloudinary.com/deifi77os/image/upload/v1735102826/School%20Management%20System/homepage/emmnkmypax7nj5zhiewe.png"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://res.cloudinary.com/deifi77os/image/upload/v1735103055/School%20Management%20System/homepage/e34ywgwfvp97ob6lerp1.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://res.cloudinary.com/deifi77os/image/upload/v1735105347/School%20Management%20System/homepage/pd2pnupvi1giezkye1ax.jpg"/>
              </div>
            </div>
            <div className="flex flex-wrap w-1/2">
              <div className="md:p-2 p-1 w-full">
                <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://res.cloudinary.com/deifi77os/image/upload/v1735105173/School%20Management%20System/homepage/ugy5jp2iegdw9aiudg2g.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://res.cloudinary.com/deifi77os/image/upload/v1735102896/School%20Management%20System/homepage/iedcwcdtjzzzqazqnt0u.jpg"/>
              </div>
              <div className="md:p-2 p-1 w-1/2">
                <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://res.cloudinary.com/deifi77os/image/upload/v1735103095/School%20Management%20System/homepage/vthqsnjgaoxfnfrphbay.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoGallery;