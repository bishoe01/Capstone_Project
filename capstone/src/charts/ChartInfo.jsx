import React from 'react';

function ChartInfo({ chartName }) {
  return (
    <div className='flex flex-col justify-around w-full h-14'>
      <div className='border-t-[3px] border-t-[#004C86] w-44' />
      <h3 className='text-2xl'>{chartName}</h3>
    </div>
  );
}

export default ChartInfo;
