import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRoomContext } from '../../context/Roomdata';
import CurrentReservation from './CurrentReservation';
function TimeLine({ room, id, department, targetDate, reservelist, setTargetDate }) {
    const [timeRange, setTimeRange] = useState([]);
    const navigate = useNavigate();
    const deptname = useLocation().pathname.split('/')[2];
    const { jwt, hours, url } = useRoomContext();
    console.log('id', id);
    useEffect(() => {
        const token = `Bearer ${jwt}`;
        axios.get(`${url}/api/studyroom/${id}`, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => res.data.reservation)
            .then((res) => res.filter((item) => item.date === targetDate))
            .then((res) => {
                const start = Math.ceil(res[0]?.startTime * 2) / 2;
                const end = Math.floor(res[0]?.endTime * 2) / 2;
                let tmptime = [];
                for (let i = start; i < end; i += .5) {
                    tmptime.push(i);
                }
                setTimeRange(tmptime)
            })
    }, [targetDate, jwt])

    return (
        <div className={`grid grid-cols-12 text-center w-full border-b-[1px] border-sub items-center py-6 my-2`}>
            <div className="col-span-2">{department}</div>
            <div className="col-span-9 flex">
                {/* {hours.map((hour, index) => (
                    <div className="flex flex-col" key={hour}>
                        <h1 className="text-sm text-left text-gray-500">{hour}</h1>
                        {timeRange && <div className="flex gap-0.5 mx-0.5">
                            <button className={`p-3 rounded-sm ${timeRange.indexOf(hour) === -1 ? 'bg-gray-300' : 'bg-emphasize'}`} />
                            <button className={`p-3 rounded-sm ${timeRange.indexOf(hour + .5) === -1 ? 'bg-gray-300' : 'bg-emphasize'}`} />
                        </div>}
                    </div>
                ))} */}
                <CurrentReservation timeRange={timeRange} />
            </div>
            <div className="col-span-1">
                <button onClick={() => navigate(`/reserve/${deptname}/${id}`,
                    { state: { targetDate: targetDate, department: department } })} className="border-2 p-2 rounded-md border-sub">예약하기</button>
            </div>
        </div>
    );
}

export default TimeLine;