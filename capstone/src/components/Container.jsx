import React from 'react';

function Container({ children }) {
  return (
    <>
      <div className='flex flex-row justify-center items-center mx-auto min-h-[calc(100vh-5.13em)]'>{children}</div>
    </>
  );
}

export default Container;
