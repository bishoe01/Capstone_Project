import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import { useRoomContext } from '../context/Roomdata';
import TimeLine from '../components/TimeTable/TimeLine';
import { IoChevronDown } from 'react-icons/io5';
import Board from '../components/Board';
import styles from '../styles';
function TimeSelect() {
    const location = useLocation();
    const { roomData, reservelist } = useRoomContext();
    const department = roomData[location.pathname.split('/')[2]];
    const [reactionArray, setReactionArray] = useState([]);
    const [nowData, setNowData] = useState();
    const [targetDate, setTargetDate] = useState();

    const HandleDateChange = (e) => setTargetDate(e.target.value);
    const currentDate = new Date();
    const newReactionArray = [];
    useEffect(() => {
        for (let i = 0; i < 6; i++) {
            const day = new Date(currentDate);
            day.setDate(day.getDate() + i);
            day.setMonth(day.getMonth() + Math.floor(day.getDate() / 31));
            newReactionArray.push({ date: day.toISOString().slice(0, 10) });
        }
        setReactionArray(newReactionArray);
        setTargetDate(newReactionArray[0].date);
    }, []);

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
                    <div className="col-span-1">이름</div>
                    <div className="col-span-1">위치</div>
                    <div className="col-span-1">수용인원</div>
                    <div className="col-span-8">예약현황</div>
                    <div className="col-span-1">예약</div>
                </div>
                {department.map((item, index) => (
                    <TimeLine key={item}
                        department={location.pathname.split('/')[2]}
                        targetDate={targetDate}
                        room={item}
                        setTargetDate={setTargetDate}
                    />
                ))}
            </section>

        </Fade>
    );
}

export default TimeSelect;