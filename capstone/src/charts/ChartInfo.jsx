import React from 'react';

function ChartInfo({ chartName, chartDescription }) {
  return (
    <div className='flex flex-col justify-center w-25% h-28 border-y-[3px] border-t-[#004C86] border-b-[#dedede] px-2 mr-6'>
      <h3 className='text-lg'>{chartName}</h3>
      <div className='text-lg'>Reservation Status</div>
      <span className='text-sm text-[#717171]'>{chartDescription}</span>
    </div>
  );
}

export default ChartInfo;
