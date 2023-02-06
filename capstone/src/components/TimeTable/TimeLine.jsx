import React from 'react';

function TimeLine(props) {
    const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    return (
        <div className='flex'>
            {hours.map((hour, index) => {
                return (
                    <div className='flex flex-col items-center border border-gray-300'>
                        <h1 className='text-sm text-gray-500'>{hour}</h1>
                        <div className='flex'>
                        <button className='p-4 bg-gray-300 rounded-md'></button>
                        <button className='p-4 bg-gray-300 rounded-md'></button>
                        </div>
                    </div>
                );
            }
            )}
        </div>
    );
}

export default TimeLine;