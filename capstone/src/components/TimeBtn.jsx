import React, { useState } from 'react';
import { useRoomContext } from '../context/Roomdata';

function TimeBtn({ text }) {
    const { selectData, setSelectData } = useRoomContext();
    const TIME_STYLE = 'w-[24px] p-4 bg-gray-500 hover:bg-emphasize rounded-lg';
    return (
        <div className='flex flex-col gap-1'>
            <h2 className='text-xl text-primary'>{text}</h2>
            <button onClick={() => {
                setSelectData({ ...selectData, start: "12:00" });
                console.log(selectData["start"]);
            }} className={TIME_STYLE}></button>
            <button onClick={() => {
                setSelectData({
                    ...selectData,
                    end: text + ":30",
                });
            }} className={TIME_STYLE}></button>

        </div>);
}

export default TimeBtn;