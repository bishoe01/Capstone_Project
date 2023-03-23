import React from 'react';
import { useLocation } from 'react-router-dom';
import RoomData from '../api/room';
import { useRoomContext } from '../context/Roomdata';

function About(props) {
  const { selectData } = useRoomContext();
  const {
    state: {
      reserveInfo: { date, room, start, end },
    },
  } = useLocation();
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-primary'>예약 정보</h1>
      <h2>날짜: {date}</h2>
      <h2>강의실: {room}</h2>
      <h2>시작 시간: {start}</h2>
      <h2>종료 시간: {end}</h2>
      {/* <RoomData /> */}
    </div>
  );
}

export default About;
