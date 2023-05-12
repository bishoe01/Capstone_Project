import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRoomContext } from '../../context/Roomdata';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function CurrentReservation({ room, timeRange, targetDate, setTimeRange }) {
    const { hours, currentDate } = useRoomContext();
    const now = new Date();
    const currentTime = (now.getHours() + now.getMinutes() / 60);
    return (
        <div className='flex'>
            {hours.map((hour, index) => (
                <div className="flex flex-col" key={hour}>
                    <h1 className="text-sm text-left text-gray-500">{hour}</h1>
                    <div className="flex gap-0.5 mx-0.5">
                        <button
                            className={`p-3 rounded-sm ${(hour < currentTime) && (currentDate === targetDate)
                                ? 'bg-gray-600'
                                : timeRange.indexOf(hour) !== -1
                                    ? 'bg-sub'
                                    : 'bg-emphasize'
                                }`}
                        />
                        <button
                            className={`p-3 rounded-sm ${(hour + .5 < currentTime) && (currentDate === targetDate)
                                ? 'bg-gray-600'
                                : timeRange.indexOf(hour + .5) !== -1
                                    ? 'bg-sub'
                                    : 'bg-emphasize'
                                }`}
                        />
                        {/* <button
                            className={`p-3 rounded-sm ${hour + 0.5 < currentHour || (hour == currentHour && (1 / 60) * currentMinute > 0.5)
                                ? 'bg-gray-600'
                                : timeRange.indexOf(hour + 0.5) !== -1
                                    ? 'bg-emphasize'
                                    : 'bg-sub'
                                }`}
                        /> */}
                    </div>
                </div>
            ))}
        </div>
    );
}
export default CurrentReservation;