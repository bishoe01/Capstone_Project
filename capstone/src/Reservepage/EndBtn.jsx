import React, { useState } from 'react';
import { useRoomContext } from '../context/Roomdata';

function EndBtn({ text, time, setTime }) {
    const { selectData, setSelectData } = useRoomContext();
    const TIME_STYLE = 'w-[24px] p-4 bg-gray-500 hover:bg-emphasize rounded-lg';
    return (
        <div className='flex flex-col gap-1'>
            <h2 className='text-xl text-primary'>{text}</h2>
            <button onClick={() => {
                time.length == 0 ? setTime([text]) : setTime([...time, text]);
            }} className={`${TIME_STYLE} ${time.length==2 ? (time >= text[0] && text<=text[1]) ? 'bg-emphasize' : '' : ""}`}></button>
        </div>);
}

export default EndBtn;