import React from 'react';

function Container({ children }) {
  return (
    <>
      <div className='flex flex-row items-center mx-auto min-h-[600px]'>{children}</div>
    </>
  );
}

export default Container;
