import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { useRoomContext } from '../context/Roomdata';
import TimeLine from '../components/TimeTable/TimeLine';
import { IoChevronDown } from 'react-icons/io5';
import Board from '../components/Board';
import styles from '../styles';
import axios from 'axios';
import { redirect } from "react-router-dom";

function TimeSelect() {
    const location = useLocation();
    const navigate = useNavigate();
    const { roomData, reservelist, reactionArray, jwt, url, building, user, locationURL } = useRoomContext();
    const [deptname, setDeptname] = useState(building[location.pathname.split('/')[2]]);
    const [nowData, setNowData] = useState();
    const [roomInfo, setRoomInfo] = useState();
    const [targetDate, setTargetDate] = useState();
    const HandleDateChange = (e) => setTargetDate(e.target.value);
    useEffect(() => {
        setTargetDate(reactionArray[0]?.date);
    }, [reactionArray]);
    useEffect(() => {
        if (user) {
            const location_URL = locationURL[user.university];
            if (location_URL !== location.pathname.split('/')[2]) {
                navigate(`/reserve/${location_URL}`);
                setDeptname(building[location_URL]);
            }
        }
    }, [user]);


    // useEffect(() => {
    //     axios.get(`${url}/api/studyroom?university=${소프트웨어융합대학}`, {)

    //         .then((response) => {
    //             console.log(response.data);
    //             setRoomData(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }, []);

    useEffect(() => {
        const token = `Bearer ${jwt}`;
        axios.get(`${url}/api/studyroom?university=${deptname}`, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => res.data)
            .then((res) => {
                setRoomInfo(res);
            })
    }, [targetDate, jwt, deptname]);


    return (
        <Fade className={`${styles.innerWidth}`}>

            <div className={`flex flex-col ${styles.yPaddings} ${styles.innerWidth}`}>
                <Board nowData={nowData} department={location.pathname.split('/')[2]} />
            </div>
            <div className='flex justify-between'>
                <h1 className='border-l-4 px-2 m-4 border-primary'>예약현황</h1>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    console.log('submit');
                }} className="flex items-center">
                    <span className="mr-2 text-accent">예약일자</span>
                    <div className="relative">
                        <select onChange={HandleDateChange} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            {reactionArray?.map((item, index) => (
                                <option key={index} value={item.date}>{item.date}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <IoChevronDown className="h-4 w-4 text-gray-700" />
                        </div>
                    </div>
                    <button className="ml-4 bg-primary hover:brightness-125 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">조회</button>
                </form>
            </div>
            <section className='flex flex-col'>
                <div className="grid grid-cols-12 gap-4 text-center text-lg text-primary w-full border-b-[1px] border-gray-500 py-2 my-2">
                    <div className="col-span-2">팀플실명</div>
                    <div className="col-span-9">예약현황</div>
                    <div className="col-span-1">예약</div>
                </div>
                {roomInfo?.map((item, index) => (
                    <TimeLine key={item.id}
                        // department={location.pathname.split('/')[2]}
                        department={item.name}
                        targetDate={targetDate}
                        id={item.id}
                        index={index}
                        deptname={deptname}
                        setTargetDate={setTargetDate}
                    />
                ))}
            </section>

        </Fade>
    );
}

export default TimeSelect;