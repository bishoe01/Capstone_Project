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
import { type } from '@testing-library/user-event/dist/type';

function ReservationDetail(props) {
    const SELECT_STYLE = 'w-[150px] bg-white border border-primary hover:border-emphasize p-3 rounded shadow leading-tight focus:outline-none focus:shadow-outline'
    const TIME_SELECT = "w-[150px] h-12 max-h-24 overflow-auto bg-white border border-primary hover:border-emphasize p-2 py-[2px] rounded shadow focus:outline-none focus:shadow-outline"
    const navigate = useNavigate();
    const { jwt, hours, url, reactionArray, filteredHours } = useRoomContext();
    const location = useLocation();
    const { targetDate, room } = location.state;
    const [timeRange, setTimeRange] = useState();
    const [department, roomNumber] = [location.pathname.split('/')[2], location.pathname.split('/')[3]];
    const [selectedDate, setSelectedDate] = useState(targetDate);
    const [reserveInfo, setReserveInfo] = useState({ "room": roomNumber, "date": selectedDate, "start": "9", "end": "10", "bookingCapacity": 4 });
    const [loading, setLoading] = useState(true); // add loading state
    const handleSelectChange = (event) => {
        setSelectedDate(event.target.value);
        setReserveInfo({ ...reserveInfo, date: event.target.value });
    };
    const [selectchoices, setSelectChoices] = useState([]);
    useEffect(() => {
        setLoading(true);
        const token = `Bearer ${jwt}`;
        axios.get(`${url}/api/studyroom/${reserveInfo.room}`, {
            headers: { Authorization: token }
        })
            .then((res) => res.data.reservation)
            .then((reservations) => {
                const filteredReservations = reservations.filter((item) => item.date === selectedDate);
                const timeRanges = filteredReservations.map((reservation) => {
                    const start = Math.ceil(reservation.startTime * 2) / 2;
                    console.log(start, "start");
                    const end = Math.floor(reservation.endTime * 2) / 2;
                    console.log(end, "end");
                    let tmptime = [];
                    for (let i = start; i < end; i += .5) {
                        tmptime.push(i);
                    }
                    return tmptime;
                });
                const flattenedTimeRanges = timeRanges.flat(); // flatten the array of arrays
                setTimeRange(flattenedTimeRanges);
                setLoading(false); // set loading state
            })
            .catch((error) => {
                console.error(error);
                setLoading(false); // set loading state
            });
        console.log(selectedDate, "selectedDate2");
        // console.log(reserveInfo, "reserveInfo");
    }, [selectedDate])

    useEffect(() => {
        setSelectChoices(filteredHours?.filter(time => !timeRange?.includes(time)));
        setReserveInfo({ ...reserveInfo, start: selectchoices[0] });
    }, [selectedDate, timeRange]
    )

    return (
        <Fade>
            <div className={`flex flex-col ${styles.innerWidth} ${styles.paddings} gap-[24px] mx-auto`}>
                <Board />
                <span className='flex items-center gap-2 text-[22px] leading-[20px] text-primary'><MdDateRange className='text-primary w-[24px] h-[24px]' />예약날짜</span>
                <select value={selectedDate} className={SELECT_STYLE} onChange={handleSelectChange} >
                    {reactionArray?.map((item, index) => (
                        <option key={index} value={item.date}>{item.date}</option>
                    ))}
                </select>

                <div className={`${styles.flexStart} `}>
                    {loading ? <div className='flex justify-center items-center w-full h-[400px]'>Loading...</div>
                        : <CurrentReservation
                            room={roomNumber}
                            timeRange={timeRange}
                            targetDate={selectedDate}
                            setTimeRange={setTimeRange}
                        />
                    }
                </div>
                <form >
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-8'> {/** 예약시간 */}
                            <div className='flex flex-col gap-4 items-stretch'>
                                <label className='text-accent font-bold'>시작 시간</label>
                                <select

                                    onChange={(e) => {
                                        setReserveInfo({ ...reserveInfo, start: e.target.value / 1 });
                                        console.log(e.target.value / 1)
                                    }}
                                    className={TIME_SELECT}>
                                    {selectchoices
                                        .map((time, index) => (
                                            <React.Fragment key={index}>
                                                <option value={time}>{time}:00</option>
                                                <option value={`${time}.5`}>{time}:30</option>
                                            </React.Fragment>
                                        ))}
                                </select>
                            </div>
                            {/* 시작 시간 선택시에 해당된 범위 내만 보여주기- 선택가능 */}
                            <div className='flex flex-col gap-4 items-stretch'>
                                <label className='text-accent font-bold'>퇴실 시간</label>
                                <select value={reserveInfo && reserveInfo.end / 1}
                                    onChange={(e) => {
                                        if (e.target.value > reserveInfo.start / 1 && e.target.value <= reserveInfo.start / 1 + 2) {
                                            setReserveInfo({ ...reserveInfo, end: e.target.value / 1 });
                                        }
                                        else if (e.target.value == reserveInfo.start / 1) {
                                            alert('최소 1시간 이상 예약 가능합니다.');
                                            setReserveInfo({ ...reserveInfo, end: reserveInfo.start / 1 + 1 });
                                        }
                                        else {
                                            alert('최대 2시간까지 예약 가능합니다.');
                                            setReserveInfo({ ...reserveInfo, end: reserveInfo.start / 1 + 2 });
                                        }
                                    }} className={TIME_SELECT}>
                                    {filteredHours
                                        .filter(time => !timeRange?.includes(time))
                                        .map((time, index) => (
                                            <React.Fragment key={index}>
                                                <option value={time}>{time}:00</option>
                                                <option value={`${time}.5`}>{time}:30</option>
                                            </React.Fragment>
                                        ))}
                                </select>
                            </div>

                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className='text-accent text-lg font-bold'>예약 내용</label>
                            {/* <textarea className='p-2 w-1/2 h-[100px] leading-3 border-[2px] border-solid rounded-[5px]' type='text' /> */}
                            <select className={TIME_SELECT}
                                defaultValue={"3" / 1}
                                onChange={(e) => {
                                    console.log(typeof (e.target.value / 1));
                                    setReserveInfo({ ...reserveInfo, bookingCapacity: e.target.value });
                                }}
                            >
                                <option value={2}>2인</option>
                                <option value={3}>3인</option>
                                <option value={4}>4인 이상</option>
                            </select>

                        </div>
                        <div className='flex gap-4'>
                            <button onClick={(e) => {
                                e.preventDefault();
                                axios.post(`${url}/api/studyroom/${reserveInfo.room}`, {
                                    "date": reserveInfo.date,
                                    "startTime": reserveInfo.start,
                                    "endTime": reserveInfo.end,
                                    "bookingCapacity": reserveInfo.bookingCapacity
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
                                navigate('/dashboard/placerental', { state: { reserveInfo } });
                            }} className='bg-primary text-xl text-white px-2 basis-1/6 rounded-full shadow-md hover:brightness-125 '>
                                예약</button>
                            <button onClick={(e) => {
                                e.preventDefault();
                                navigate(`/reserve/${department}`, { state: { reserveInfo } });
                            }} className='bg-white border text-xl text-black p-3 basis-1/6 rounded-full shadow-md hover:brightness-75'>
                                취소</button>
                        </div>
                    </div>
                </form>
            </div >
        </Fade >
    );
}

export default ReservationDetail;