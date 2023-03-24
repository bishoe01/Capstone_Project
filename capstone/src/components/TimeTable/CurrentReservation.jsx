import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CurrentReservation({ room, timeRange, hours }) {


    return (
        <div className='flex'>
            {hours.map((hour, index) => (
                <div className="flex flex-col" key={hour}>
                    <h1 className="text-sm text-left text-gray-500">{hour}</h1>
                    {timeRange && <div className="flex gap-0.5 mx-0.5">
                        <button
                            className={`p-3 rounded-sm ${timeRange.indexOf(hour) === -1 ? 'bg-gray-300' : 'bg-emphasize'}`}>
                        </button>
                        <button className={`p-3 rounded-sm ${timeRange.indexOf(hour + .5) === -1 ? 'bg-gray-300' : 'bg-emphasize'}`}></button>
                    </div>}
                </div>
            ))}
        </div>
    );
}

export default CurrentReservation;