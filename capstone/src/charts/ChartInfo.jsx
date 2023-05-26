import React from 'react';

function ChartInfo({ chartName }) {
  return (
    <div className='flex flex-col justify-around w-fit h-14 relative'>
      <h3 className='text-3xl text-primary p-4 py-[8px] rounded-full border-primary border-4'>{chartName}</h3>
    </div>
  );
}

export default ChartInfo;
