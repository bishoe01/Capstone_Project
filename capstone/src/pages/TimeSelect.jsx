import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import StepBar from '../components/StepBar';
import Fade from 'react-reveal/Fade';
import TimeBtn from '../components/TimeBtn';
import TimeTable from '../components/TimeTable';
import { MdLocationOn } from 'react-icons/md';
import { MdOutlineEditCalendar } from 'react-icons/md';
import ReserveInput from '../Reservepage/ReserveInput';
import { useRoomContext } from '../context/Roomdata';

function TimeSelect(props) {
    const location = useLocation();
    const [time, setTime] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
    const { roomData } = useRoomContext();
    const [deparment, setDepartment] = useState(roomData[location.pathname.split('/')[2]]);
    const [onSection, setOnSection] = useState(false);
    console.log(onSection);
    return (
        <Fade>
            <StepBar step={2} />
            <section className='flex relative'>
                <div className='basis-3/12 p-4 text-center border-r-[1px] border-sub'>
                    <img className='rounded-xl' src={`/images/room.jpg`} alt={deparment} />
                    <p className='text-2xl text-primary mt-3'>팀플실 이미지</p>
                </div>
                <div className='flex flex-col basis-5/12 p-4 gap-5'>
                    {deparment.map((depart, index) => {
                        return (
                            <div key={index} className={`flex flex-col gap-1 p-4 items-start ${onSection[index] ? 'border-emphasize' : 'border-primary'} border-emphasize border-2 rounded-xl`}>
                            <span className='text-xl border-sub border-b-2 p-1 drop-shadow-lg'>{depart}호</span>
                                <TimeTable />
                            </div>
                        )
                    })}
                </div>
                <div className='flex flex-col gap-6 p-4 absolute text-3xl -right-1/4 fixed w-2/6 h-auto rounded-lg border-primary border-2 shadow-md text-primary'>
                    <h1 className='flex items-center gap-4'><MdOutlineEditCalendar />예약 정보</h1>
                    <form className='flex flex-col gap-4'>
                        <label htmlFor="room" className="block text-2xl text-primary font-medium text-gray-900 dark:text-primary">팀플실 번호</label>
                        <ReserveInput options={deparment} />
                    </form>
                </div>
            </section>
        </Fade>
    );
}

export default TimeSelect;