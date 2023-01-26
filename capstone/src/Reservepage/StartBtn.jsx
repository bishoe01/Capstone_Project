import React, { useEffect, useState } from 'react';
import { useRoomContext } from '../context/Roomdata';

function StartBtn({ text, time, setTime, isStart ,setIsStart}) {
    const { selectData, setSelectData } = useRoomContext();
    const TIME_STYLE = 'w-[24px] p-4 bg-gray-500 hover:bg-emphasize rounded-lg';
    const { start , end} = time;
    return (
        <div className='flex flex-col gap-1'>
            <h2 className='text-xl text-primary'>{text}</h2>
            <button onClick={() => {
                {start=="" ? setTime({start:text, end:""}) : setTime({start:text-3, end:text})};
                console.log(time);
            }} className={`${TIME_STYLE} ${(start && end) ? (start <= text && text<=end) ? 'bg-emphasize' : '' : ""}`}></button>
        </div>);
}

export default StartBtn;