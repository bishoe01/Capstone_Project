import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useRoomContext } from '../../context/Roomdata';
function TimeLine({ room, department, targetDate, reservelist }) {
    const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    const [timeRange, setTimeRange] = useState([]);
    let tmptime = [];
    const navigate = useNavigate();
    // useEffect(() => {
    //     const start = Math.ceil(reservelist[0]?.startTime * 2) / 2;
    //     const end = Math.floor(reservelist[0]?.endTime * 2) / 2;
    //     for (let i = start; i <= end; i += .5) {
    //         tmptime.push(i);
    //     }
    //     setTimeRange(tmptime)
    // }, [reservelist]);
    useEffect(() => {
        axios.get(`/api/studyroom/${room}.json`)
            .then((res) => res.data.reservation)
            .then((res) => res.filter((item) => item.date === targetDate))
            .then((res) => {
                const start = Math.ceil(res[0]?.startTime * 2) / 2;
                const end = Math.floor(res[0]?.endTime * 2) / 2;
                for (let i = start; i <= end; i += .5) {
                    tmptime.push(i);
                }
                setTimeRange(tmptime)
            }
            )
    }, [targetDate])


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
                            <button className={`p-3 rounded-sm ${timeRange.indexOf(hour) === -1 ? 'bg-gray-300' : 'bg-emphasize'}`} />
                            <button className={`p-3 rounded-sm ${timeRange.indexOf(hour + .5) === -1 ? 'bg-gray-300' : 'bg-emphasize'}`} />
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