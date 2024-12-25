import React from 'react';

const Button = ({name}) => {
  return (
    <div className="my-3 flex items-center justify-center lg:justify-start">
      <button className='bg-yellow-400 lg:p-5 p-3 lg:text-xl rounded-md'>{ name }</button>
    </div>
  );
};

export default Button;