import React from 'react';

function TimeBtn({ text }) {
    const TIME_STYLE = 'w-[24px] p-4 bg-gray-500 hover:bg-emphasize rounded-lg';
    return (
        <div className='flex flex-col gap-1'>
            <h2 className='text-xl text-primary'>{text}</h2>
            <button className={TIME_STYLE}></button>
            <button className={TIME_STYLE}></button>
            
        </div>);
}

export default TimeBtn;