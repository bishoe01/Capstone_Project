import React from 'react';

const TAG_STYLE = 'rounded-xl bg-primary text-primary text-xs text-text py-0.5 px-1 mx-0.5 before:align-middle';
const STATE_BTN_STYLE = 'px-3 py-0.5 w-20 text-text rounded-lg before:align-middle';

function ReserveState({ state, location, startTime, endTime, name, headCount, date }) {
  return (
    <>
      <div className='flex flex-col justify-center items-center py-2 min-w-[932px]'>
        <div className='w-[70%] flex flex-row border border-sub rounded-2xl shadow-[0px_2px_4px_rgba(0,0,0,0.18)]'>
          <div className='basis-1/2'>
            <ul className='flex flex-col justify-around items-center h-full px-4 py-3 border-r border-dotted border-sub'>
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
          <div className='flex flex-row basis-1/2 py-1 px-[2%]'>
            <div className='flex flex-col justify-around basis-3/4 h-full'>
              <h3 className='text-emphasize pl-8'>{state}</h3>
              <div className='flex flex-col'>
                <h3 className='w-full text-left text-xs text-textgray'>예약자</h3>
                <span className='text-primary pl-4'>
                  {name} 외 {headCount}명
                </span>
              </div>
              <div className='flex flex-col'>
                <h3 className='w-full text-left text-xs text-textgray'>예약일자</h3>
                <span className='text-primary text-xs lg:text-base pl-4'>{date}</span>
              </div>
            </div>
            <div className='flex flex-col justify-around items-center basis-1/4'>
              <button className={'bg-primary ' + STATE_BTN_STYLE}>입실</button>
              <button className={'bg-sub ' + STATE_BTN_STYLE}>연장</button>
              <button className={'bg-textgray ' + STATE_BTN_STYLE}>퇴실</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReserveState;
