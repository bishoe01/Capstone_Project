import React from 'react';

function Container({ children }) {
  return (
    <>
      <div className='mt-10 flex flex-row items-center min-h-[600px]'>{children}</div>
    </>
  );
}

export default Container;
