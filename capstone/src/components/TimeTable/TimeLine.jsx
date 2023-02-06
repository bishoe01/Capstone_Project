import React from 'react';

function TimeLine(props) {
    const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    return (
        <div className='flex w-full items-center gap-4 border-b-[1px] border-sub p-3'>
            <div className='flex basis-3/12 text-center px-2'>
                <span className='p-4'>101호</span>
                <span className='p-4'>1층</span>
                <span className='p-4'>2-6</span>
            </div>
            <div className='flex basis-8/12'>
            {hours.map((hour, index) => {
                return (
                    <div className='flex flex-col' key={hour}>
                        <h1 className='text-sm text-gray-500'>{hour}</h1>
                        <div className='flex gap-0.5 mx-0.5'>
                        <button className='p-3  bg-gray-300 rounded-sm '></button>
                        <button className='p-3  bg-gray-300 rounded-sm '></button>
                        </div>
                    </div>
                );
            }
            )}
            </div>
            <button className='border-2 p-2 rounded-md border-sub basis-1/12'>예약하기</button>
        </div>
    );
}

export default TimeLine;