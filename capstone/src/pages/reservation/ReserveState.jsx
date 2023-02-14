import React from 'react';

const TAG_STYLE = 'rounded-xl bg-primary text-xs text-primary  text-text py-0.5 px-1 mx-0.5 before:align-middle';

function ReserveState({ state, location, startTime, endTime, name, headCount, date }) {
  return (
    <>
      <div className='flex flex-col justify-center items-center py-2'>
        <div className='w-[70%] flex flex-row border border-sub rounded-2xl'>
          <div className='w-[25%] bg-room bg-cover bg-center bg-no-repeat rounded-l-2xl'></div>
          <div className='w-[25%]'>
            <ul className='flex flex-col justify-around items-center h-full px-6 py-3 border-r border-dotted border-sub'>
              <li className='w-full'>
                <div className='flex flex-row justify-start items-center'>
                  <img src='icons/location.png' alt='' className='w-5 h-5 mr-2' />
                  <span className='text-primary align-middle leading-normal'>{location}</span>
                </div>
              </li>
              <li className='w-full'>
                <div className='flex flex-row justify-start items-center py-2'>
                  <img src='icons/clock.png' alt='' className='w-5 h-5 mr-2' />
                  <span className='text-primary align-middle'>
                    {startTime} ~ {endTime}
                  </span>
                </div>
              </li>
              <li className='w-full'>
                <div className='flex flex-row justify-start items-center'>
                  <img src='icons/sharp.png' alt='' className='w-5 h-5 mr-2' />
                  <span className={TAG_STYLE}>디스플레이</span>
                  <span className={TAG_STYLE}>음료 반입</span>
                </div>
              </li>
            </ul>
          </div>
          <div className='flex flex-row w-[50%] py-1 px-[2%]'>
            <div className='w-[80%] flex flex-col justify-around h-full'>
              <h3 className='text-emphasize pl-8'>{state}</h3>
              <div className='flex flex-col'>
                <h3 className='w-full text-left text-xs text-textgray'>예약자</h3>
                <span className='text-sm text-primary pl-8'>
                  {name} 외 {headCount}명
                </span>
              </div>
              <div className='flex flex-col'>
                <h3 className='w-full text-left text-xs text-textgray'>예약일자</h3>
                <span className='text-sm text-primary pl-8'>{date}</span>
              </div>
            </div>
            <div className='flex flex-col justify-around items-center w-[20%]'>
              <button className='bg-textgray px-6  text-text rounded-lg before:align-middle'>입실</button>
              <button className='bg-primary px-6  text-text rounded-lg before:align-middle'>퇴실</button>
              <button className='bg-primary px-6 text-text rounded-lg before:align-middle'>연장</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReserveState;
