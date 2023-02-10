import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Board from '../components/Board';
import CurrentReservation from '../components/TimeTable/CurrentReservation';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ReservationDetail(props) {
    const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
    const location = useLocation();
    const [timeRange, setTimeRange] = useState();
    const navigate = useNavigate();
    const [targetDate, setTargetDate] = useState(new Date().toLocaleDateString().replace(/\./g, ''));
    const roomNumber = location.pathname.split('/')[3];
    const [reserveInfo, setReserveInfo] = useState({ room: roomNumber, date: targetDate, start: 9, end: 9 });
    const HandleDateChange = (e) => {
        setTargetDate(e.target.value);
    }
    const [dateArray, setDateArray] = useState([]);
    useEffect(() => {
        axios.get('/data/currentdata.json')
            .then((res) => {
                setTimeRange(res.data[targetDate][roomNumber]);
                setDateArray(Object.keys(res.data));
                setReserveInfo({ ...reserveInfo, date: targetDate });
            })
    }, [targetDate])
    return (
        <Fade>
            <div className='p-4 my-12 gap-6 flex flex-col'>
                <Board />
                <h2 className='text-primary border-l-4 border-sub px-2'>예약날짜</h2>
                <select onChange={HandleDateChange} className="w-1/2 appearance-none bg-white border border-gray-400 hover:border-gray-500 p-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    {dateArray && dateArray.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                    ))}
                </select>
                <div className='border-2 rounded p-3 '>
                    <CurrentReservation room={roomNumber} timeRange={timeRange} hours={hours} />
                </div>
                <form >
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-8'> {/** 예약시간 */}
                            <div className='flex flex-col basis-2/5 gap-4 items-stretch'>
                                <label className='text-accent'>예약시간</label>
                                <select onChange={(e) => {
                                    e.preventDefault();
                                    setReserveInfo({ ...reserveInfo, start: e.target.value });
                                }} className="h-12 max-h-24 overflow-auto bg-white border border-gray-400 hover:border-gray-500 p-3 rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                                    {hours.map((time, index) => {
                                        return <React.Fragment key={index}>
                                            <option value={time}>{time}:00</option>
                                            <option value={`${time}.5`}>{time}:30</option>
                                        </React.Fragment>
                                    })}
                                </select>
                            </div>
                            <div className='flex flex-col basis-2/5 gap-4'>
                                <label className='text-accent'>예약시간</label>
                                <select value={reserveInfo && reserveInfo.end / 1} onChange={(e) => {
                                    if (e.target.value > reserveInfo.start / 1) {
                                        setReserveInfo({ ...reserveInfo, end: e.target.value });
                                    }
                                    else {
                                        alert('최대 2시간까지 예약 가능합니다.')
                                        setReserveInfo({ ...reserveInfo, end: reserveInfo.start / 1 + 2 });
                                    }
                                    console.log(reserveInfo);
                                }} className="h-12 max-h-24 overflow-auto bg-white border border-gray-400 hover:border-gray-500 p-3 rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                                    {hours.map((time, index) => {
                                        return <React.Fragment key={index}>
                                            <option value={time}>{time}:00</option>
                                            <option value={`${time}.5`}>{time}:30</option>
                                        </React.Fragment>
                                    })}
                                </select>
                            </div>

                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-accent'>예약내용</label>
                            <textarea className='border-2 rounded p-2' type='text' />
                        </div>
                        <div className='flex justify-center gap-4'>
                            <button onClick={(e) => {
                                e.preventDefault();
                                console.log(reserveInfo);
                                navigate('/about', { state: { reserveInfo } });
                            }} className='bg-primary text-white p-3 basis-1/4 rounded'>예약하기</button>
                            <button onClick={(e) => {
                                console.log(reserveInfo);
                                navigate(`/reservation/${roomNumber}`);
                            }} className='bg-sub text-primary p-3 basis-1/4 rounded'>취소</button>
                        </div>
                    </div>
                </form>
            </div >
        </Fade >
    );
}

export default ReservationDetail;