import React, { useState } from 'react';
import EndBtn from '../Reservepage/EndBtn';
import StartBtn from '../Reservepage/StartBtn';
import TimeBtn from './TimeBtn';

function TimeTable({ text }) {
    const [time, setTime] = useState({
        start: "",
        end: "",
    });
    const [isStart, setIsStart] = useState(0);
    const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    return (
        <div className='flex gap-1 text-center'>
            {arr.map((element, index) => {
                return (
                    <div key={index}>
                        <StartBtn text={element} setTime={setTime} time={time} isStart={isStart} setIsStart={setIsStart} />
                        <StartBtn text={element} setTime={setTime} time={time} isStart={isStart} setIsStart={setIsStart} />
                    </div>
                )
            })}
        </div>


    );
}

export default TimeTable;