import React, { useState } from 'react';
import { IoPlayCircleSharp } from 'react-icons/io5';
import ReactPlayer from 'react-player';
import Button from '../../../../components/frontend/Button';

const Welcome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open/close state
  const [modalVideoSrc, setModalVideoSrc] = useState(null);

  // Static data
  const content = {
    image: 'https://res.cloudinary.com/deifi77os/image/upload/v1735098726/School%20Management%20System/homepage/o5nfnp7a5kto40zcnmzm.png',
    youtubeVideos: 'https://www.youtube.com/watch?v=qT6ScftAtLc&ab_channel=YaleUniversity', // Video URL
    videoUrl: '', // Alternative video URL
    title: 'Welcome To Our Campus',
    subtext: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel sapien id libero tincidunt tincidunt.',
    brief_description: 'Smply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Smply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s when an unknown printerit to make a type specimen book.', 
  };

  // Function to open the modal and set video source
  const handlePlayButtonClick = (videoSrc) => {
    setModalVideoSrc(videoSrc); // Set the clicked video URL
    setIsModalOpen(true); // Open the modal
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setModalVideoSrc(null); // Clear video source
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col lg:flex-row-reverse gap-20  lg:justify-between mt-24 bg-white rounded-lg">
        <div className="lg:w-1/2 relative -mt-40 lg:mt-0">
          <div className="relative rounded-lg shadow-md cursor-pointer overflow-hidden">
            {content.youtubeVideos || content.videoUrl ? (
              <div
                onClick={() =>
                  handlePlayButtonClick(
                    content.youtubeVideos ? content.youtubeVideos : content.videoUrl
                  )
                }
                className="h-[35.9vw] lg:h-[25.9vw] cursor-pointer rounded-lg overflow-hidden"
              >
                <ReactPlayer
                  url={content.youtubeVideos ? content.youtubeVideos : content.videoUrl}
                  width="100%"
                  height="100%"
                  light={content.image} // Display image thumbnail before the video plays
                  playIcon={<IoPlayCircleSharp className="text-7xl text-red-600" />} // Custom play button
                />
              </div>
            ) : (
              <div>
                <img
                  src={content.image}
                  className="bg-cover"
                  alt="Chairman"
                />
              </div>
            )}
          </div>
        </div>

        <div className="lg:w-1/2 mt-5 lg:mt-0 p-1 lg:pl-10 lg:py-10">
          <h1 className="text-center lg:text-6xl text-3xl lg:text-start font-bold text-blue-950 uppercase">
            {content.title}
          </h1>

          <p className="lg:text-lg text-10px text-justify font-bold overflow-hidden lg:mt-2 lg:block">
            {content.subtext}
          </p>
          <p className="lg:text-xl text-black font-light mt-2 text-center lg:text-start">
            {content.brief_description}
          </p>
         <Button name={"Read More"}></Button>
        </div>
      </div>

      {/* Modal to play video */}
      {isModalOpen && modalVideoSrc && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-4xl bg-black rounded-lg p-4">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={handleCloseModal}
            >
              ✕
            </button>
            {/* ReactPlayer inside the modal */}
            <div className="w-full h-[60vh]">
              <ReactPlayer
                url={modalVideoSrc}
                width="100%"
                height="100%"
                controls
                playing
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Welcome;
