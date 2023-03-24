import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles';
function TimeLine({ room, current, department, targetDate, nowData, reserveCurrent }) {
    const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    const [timeRange, setTimeRange] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`/data/currentdata${department}.json`)
            .then((res) => {
                setTimeRange(res?.data[targetDate][room]);
            })
    }, [targetDate]);
    return (
        <div className={`grid grid-cols-12 text-center w-full border-b-[1px] border-sub items-center py-6 my-2`}>
            <div className="col-span-1">{room}호</div>
            <div className="col-span-1">1층</div>
            <div className="col-span-1">2~4인</div>
            <div className="col-span-8 flex">
                {hours.map((hour, index) => (
                    <div className="flex flex-col" key={hour}>
                        <h1 className="text-sm text-left text-gray-500">{hour}</h1>
                        {timeRange && <div className="flex gap-0.5 mx-0.5">
                            <button
                                className={`p-3 rounded-sm ${timeRange.indexOf(hour) == -1 ? 'bg-gray-300' : 'bg-emphasize'}`}>
                            </button>
                            <button className={`p-3 rounded-sm ${timeRange.indexOf(hour + .5) == -1 ? 'bg-gray-300' : 'bg-emphasize'}`}></button>
                        </div>}
                    </div>
                ))}
            </div>
            <div className="col-span-1">
                <button onClick={() => navigate(`/reserve/${department}/${room}`)} className="border-2 p-2 rounded-md border-sub">예약하기</button>
            </div>
        </div>
    );
}

export default TimeLine;