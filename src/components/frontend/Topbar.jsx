import React from 'react';
import { FaFacebook, FaGoogle, FaMap, FaPhone, FaTwitter, FaUser, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Topbar = () => {
  return (
    <div className='bg-themeBlue text-white py-3'>
      <div className="flex justify-between w-10/12 mx-auto">
        <div className=" lg:flex gap-3 hidden">
          <p className='flex items-center gap-2'>
            <FaMap />
            <span>  1PO Box, Collins Street West, Australia </span> |
          </p>
          <p className='flex items-center gap-2'>
            <MdEmail />
            <span>info@example.com</span> |
          </p>
          <p className='flex items-center gap-2'>
            <FaPhone />
            <span>+61383766284</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <p className='flex items-center gap-2'>
            <FaUser />
            <span>  Login / Register </span> |
          </p>
          <p className='flex items-center gap-2'>
            <FaFacebook />
            <FaTwitter />
            <FaGoogle />
            <FaYoutube />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;