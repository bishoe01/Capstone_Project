import React from 'react';

function TimeBtn({ text }) {
    return (
        <div className='flex flex-col gap-1'>
            <h1>{text}</h1>
            <button className='w-[24px] p-4 bg-gray-500 hover:bg-emphasize'></button>
            <button className='w-[24px] p-4 bg-gray-500 hover:bg-emphasize'></button>
        </div>);
}

export default TimeBtn;