import React from 'react';
import TimeBtn from './TimeBtn';

function TimeTable(props) {
    const time = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23]
    return (
        
        <div className='flex gap-1 text-center'>
            {time.map((time,index) => {
                return <TimeBtn text={time} key={index}/>
            })}

        </div>
    );
}

export default TimeTable;