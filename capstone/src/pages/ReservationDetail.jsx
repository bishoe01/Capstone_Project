import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import CurrentReservation from '../components/TimeTable/CurrentReservation';
import Fade from 'react-reveal/Fade';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import { MdDateRange } from 'react-icons/md';
import styles from '../styles';
import { useRoomContext } from '../context/Roomdata';
import TimeLine from '../components/TimeTable/TimeLine';

function ReservationDetail(props) {
    const SELECT_STYLE = 'w-[150px] apperance-none bg-white border border-gray-400 hover:border-gray-500 p-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
    const navigate = useNavigate();
    const { jwt, hours, url, reactionArray } = useRoomContext();
    const location = useLocation();
    const { targetDate, room } = location;

    const [timeRange, setTimeRange] = useState();
    // const [targetDate, setTargetDate] = useState(new Date().toLocaleDateString().replace(/\./g, ''));
    const [department, roomNumber] = [location.pathname.split('/')[2], location.pathname.split('/')[3]];
    const [selectedDate, setSelectedDate] = useState((targetDate ? targetDate : reactionArray[0]?.date));
    const [reserveInfo, setReserveInfo] = useState({ room: roomNumber, date: selectedDate, start: 9, end: 9 });


    const handleSelectChange = (event) => {
        setSelectedDate(event.target.value);
        setReserveInfo({ ...reserveInfo, date: event.target.value });
    };
    useEffect(() => {
        const token = `Bearer ${jwt}`;
        axios.get(`${url}/api/studyroom/${reserveInfo.room}`, {
            headers: {
                Authorization: token
            }
        })
            .then((res) => res.data.reservation)
            .then((res) => res.filter((item) => item.date === selectedDate))
            .then((res) => {
                const start = Math.ceil(res[0]?.startTime * 2) / 2;
                const end = Math.floor(res[0]?.endTime * 2) / 2;
                let tmptime = [];
                for (let i = start; i <= end; i += .5) {
                    tmptime.push(i);
                }
                setTimeRange(tmptime);
            })
            .finally(console.log(timeRange))
            .catch((error) => {
                console.error(error);
            });
    }, [selectedDate])
    return (
        <Fade>
            <div className={`flex flex-col ${styles.innerWidth} ${styles.paddings} gap-[24px] mx-auto`}>
                <Board />
                <span className='flex gap-4 text-xl leading-[20px] text-primary'><MdDateRange className='text-black' />예약날짜</span>
                <select defaultValue={location.state.targetDate ? location.state.targetDate : reactionArray[0]?.date} className={SELECT_STYLE} onChange={handleSelectChange}>
                    {reactionArray && reactionArray?.map((item, index) => (
                        <option key={index} value={item.date}>{item.date}</option>
                    ))}
                </select>
                <div className={`${styles.flexStart} `}>
                    <CurrentReservation
                        room={roomNumber}
                        timeRange={timeRange}
                        hours={hours}
                        targetDate={selectedDate}
                        setTimeRange={setTimeRange}
                    />
                </div>
                <form >
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-8'> {/** 예약시간 */}
                            <div className='flex flex-col gap-4 items-stretch'>
                                <label className='text-accent font-bold'>시작 시간</label>
                                <select onChange={(e) => {
                                    const selectedTime = e.target.value;
                                    setReserveInfo({ ...reserveInfo, start: selectedTime });
                                }}
                                    className="w-[200px] h-12 max-h-24 overflow-auto bg-white border border-gray-400 hover:border-gray-500 p-3 rounded shadow appearance-none focus:outline-none focus:shadow-outline">
                                    {hours.map((time, index) =>
                                    (<React.Fragment key={index}>
                                        <option value={time}>{time}:00</option>
                                        <option value={`${time}.5`}>{time}:30</option>
                                    </React.Fragment>)
                                    )}
                                </select>
                            </div>
                            {/* 시작 시간 선택시에 해당된 범위 내만 보여주기- 선택가능 */}
                            <div className='flex flex-col gap-4 items-stretch'>
                                <label className='text-accent font-bold'>퇴실 시간</label>
                                <select value={reserveInfo && reserveInfo.end / 1}
                                    onChange={(e) => {
                                        if (e.target.value > reserveInfo.start / 1 && e.target.value <= reserveInfo.start / 1 + 2) {
                                            setReserveInfo({ ...reserveInfo, end: e.target.value });
                                        }
                                        else if (e.target.value == reserveInfo.start / 1) {
                                            alert('최소 1시간 이상 예약 가능합니다.');
                                            setReserveInfo({ ...reserveInfo, end: reserveInfo.start / 1 + 1 });
                                        }
                                        else {
                                            alert('최대 2시간까지 예약 가능합니다.');
                                            setReserveInfo({ ...reserveInfo, end: reserveInfo.start / 1 + 2 });
                                        }
                                    }} className="w-[200px] h-12 max-h-24 overflow-auto bg-white border border-gray-400 hover:border-gray-500 p-3 rounded shadow appearance-none focus:outline-none focus:shadow-outline">

                                    {hours.map((time, index) => (
                                        <React.Fragment key={index}>
                                            <option value={time}>{time}:00</option>
                                            <option value={`${time}.5`}>{time}:30</option>
                                        </React.Fragment>
                                    )
                                    )}
                                </select>
                            </div>

                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-accent text-lg font-bold'>예약 내용</label>
                            {/* <textarea className='p-2 w-1/2 h-[100px] leading-3 border-[2px] border-solid rounded-[5px]' type='text' /> */}
                            <select className={SELECT_STYLE} >
                                <option value="2">2인</option>
                                <option value="3">3인</option>
                                <option value="4">4인 이상</option>
                            </select>

                        </div>
                        <div className='flex justify-center gap-4'>
                            <button onClick={(e) => {
                                e.preventDefault();
                                axios.post(`${url}/api/studyroom/${reserveInfo.room}`, {
                                    date: reserveInfo.date,
                                    startTime: reserveInfo.start,
                                    endTime: reserveInfo.end,
                                    bookingCapacity: 3
                                }, {
                                    headers: {
                                        Authorization: `Bearer ${jwt}`
                                    }
                                }).then((response) => {
                                    console.log(reserveInfo);
                                    alert('Reservation success!');
                                }).catch((error) => {
                                    console.error(error);
                                    alert('Reservation failed. Please try again.');
                                });
                                navigate('/about', { state: { reserveInfo } });
                            }} className='bg-primary text-white p-3 basis-1/4 rounded'>예약하기</button>
                            <button onClick={(e) => {
                                e.preventDefault();
                                navigate(`/reserve/${department}`, { state: { reserveInfo } });
                            }} className='bg-sub text-primary p-3 basis-1/4 rounded'>취소</button>
                        </div>
                    </div>
                </form>
            </div >
        </Fade >
    );
}

export default ReservationDetail;