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
import TimePickerExample from '../components/TimePickerExapmple';

function TimeSelect(props) {
    const location = useLocation();
    const [time, setTime] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
    const { roomData, selectData,setSelectData } = useRoomContext();
    const [deparment, setDepartment] = useState(roomData[location.pathname.split('/')[2]]);
    const [onSection, setOnSection] = useState(Array.from({length:deparment.length}, () => false));
    const [y,m,d] = new Date().toLocaleDateString().split('.');
    const today = m.concat('월 ', d, '일');
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
                            <div key={index} 
                            onClick={() => {
                                const newOnSection = [...onSection];
                                newOnSection.fill(false);
                                newOnSection[index] = true;
                                setSelectData({...selectData , room: deparment[index]});
                                setOnSection(newOnSection);
                            }}
                            className={`flex flex-col gap-1 p-4 items-start ${onSection[index] ? 'border-emphasize' : 'border-primary'} border-emphasize border-2 rounded-xl`}>
                                <span className='text-xl border-sub border-b-2 p-1 drop-shadow-lg'>{depart}호</span>
                                <TimeTable />
                            </div>
                        )
                    })}
                </div>
                <div className='flex flex-col gap-6 p-4 absolute text-3xl -right-1/4 fixed w-2/6 h-auto rounded-xl border-primary border-[3px] shadow-md shadow-sub text-primary'>
                    <h1 className='flex items-center gap-4'><MdOutlineEditCalendar />예약 정보</h1>
                    <form className='flex flex-col gap-4'>
                        <label htmlFor="room" className="block text-2xl text-primary font-medium text-gray-900 dark:text-primary">팀플실 번호</label>
                        <ReserveInput options={deparment} type={'호'} placeholder={"예약하실 팀플실을 선택하세요"} selected={selectData["room"]}/>
                        <label htmlFor="room" className="block text-2xl text-primary font-medium text-gray-900 dark:text-primary">날짜</label>
                        <ReserveInput options={Array.from({length:7} ,(v,index) => `${m}월 ${Number(d) + index}일`)} placeholder={"예약일을 선택해주세요"} />
                        <label htmlFor="room" className="block text-2xl text-primary font-medium text-gray-900 dark:text-primary">이용시간</label>
                        <div className='flex flex-col w-1/2 gap-2'>
                        <ReserveInput options={time} type={':00'} placeholder='00:00' /> 
                        <ReserveInput options={time} type={':00'} placeholder='00:00' /> 
                        </div>
                        
                        <label htmlFor="room" className="block text-2xl text-primary font-medium text-gray-900 dark:text-primary">인원</label>
                        <ReserveInput options={Array.from({length:5} ,(v,i) => `${i+2}인`)} placeholder={"인원 선택 (최소 2명이상)"} />
                        <button className='mt-4 bg-primary text-white text-2xl rounded-lg p-2'>예약하기</button>
                    </form>
                </div>
            </section>
        </Fade>
    );
}

export default TimeSelect;