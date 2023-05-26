import React, { useState } from 'react';

function SideBar({ onSelection }) {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${isOpen ? 'translate-x-0' : '-translate-x-[80%]'} fixed top-1/2 left-0 translate-y-[-30%] w-44 h-48 px-4 py-2 border-2 border-[#ececec] rounded-r-2xl overflow-hidden transition-transform duration-500 ease-in-out`}>
      {isOpen ? (
        <>
          <h1 className='text-lg text-primary'>예약 현황</h1>
          <ul className='flex flex-col justify-center gap-2 h-full'>
            <li className='hover:cursor-pointer hover:text-emphasize' onClick={() => onSelection('Bar_Count')}>
              팀플실 / 예약자 수
            </li>
            <li className='hover:cursor-pointer hover:text-emphasize' onClick={() => onSelection('Area_Treemap')}>
              시간대별 / 팀플실별
            </li>
            <li className='hover:cursor-pointer hover:text-emphasize' onClick={() => onSelection('Line_Circle')}>
              월별 / 인원별
            </li>
            <li className='hover:cursor-pointer hover:text-emphasize' onClick={() => onSelection('User')}>
              나의 지난달 예약
            </li>
          </ul>
          <button className='absolute top-4 right-4 text-base font-bold text-gray-900 focus:outline-none' onClick={toggleSidebar}>
            X
          </button>
        </>
      ) : (
        <button className='absolute top-4 right-4 text-3xl font-bold text-gray-900 focus:outline-none' onClick={toggleSidebar}>
          &#x203A;
        </button>
      )}
    </div>
  );
}
export default SideBar;
