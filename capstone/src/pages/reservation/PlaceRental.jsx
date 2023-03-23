import React, { useState, useEffect } from 'react';
import Container from '../../components/Container';
import Fade from 'react-reveal/Fade';
import SideMenu from '../../components/SideMenu';
import ReserveState from './ReserveState';
import HistoryList from './HistoryList';

import axios from 'axios';

//axios로 받아올 데이터, 현재는 임시
const histories = [
  {
    category: '스터디룸',
    location: '경상대학 1F 105호',
    time: '21:00 ~ 23:00',
    date: '22/12/16',
    count: 4,
    state: 'reserved',
  },
  {
    category: '강의실',
    location: '경상대학 3F 315호',
    time: '17:00 ~ 19:00',
    date: '22/12/11',
    count: 14,
    state: 'canceled',
  },
  {
    category: '강의실',
    location: '제1공학관 2F 205호',
    time: '15:00 ~ 17:00',
    date: '22/12/10',
    count: 4,
    state: 'failed',
  },
  {
    category: '스터디룸',
    location: '국제문화대학 2F 110호',
    time: '10:00 ~ 12:00',
    date: '22/11/16',
    count: 4,
    state: 'complete',
  },
  {
    category: '스터디룸',
    location: '국제문화대학 2F 110호',
    time: '10:00 ~ 12:00',
    date: '22/11/16',
    count: 4,
    state: 'complete',
  },
  {
    category: '스터디룸',
    location: '국제문화대학 2F 110호',
    time: '10:00 ~ 12:00',
    date: '22/11/16',
    count: 4,
    state: 'complete',
  },
  {
    category: '스터디룸',
    location: '국제문화대학 2F 110호',
    time: '10:00 ~ 12:00',
    date: '22/11/16',
    count: 4,
    state: 'failed',
  },
];

function PlaceRental() {
  const [history, setHistory] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios.get('/api/user/order').then((res) => {});
  //   };

  //   fetchData();
  // }, []);

  return (
    <Fade>
      <Container>
        <SideMenu />
        <div className='w-full'>
          <div className='py-8'>
            <h3 className='pl-24 text-primary font-black text-lg'>예약현황</h3>
            <ReserveState state={'현재 이용 중'} location={'경상대학 2F 215호'} startTime={'18:00'} endTime={'20:00'} name='Hanyang' headCount={3} date={'22/12/12'} />
            <ReserveState state={'4일 후'} location={'경상대학 3F 301호'} startTime={'21:00'} endTime={'23:00'} name='Hanyang' headCount={3} date={'22/12/16'} />
          </div>
          <div className='w-full'>
            <h3 className='px-24 text-primary font-black text-lg'>예약내역</h3>
            <HistoryList histories={histories} />
          </div>
        </div>
      </Container>
    </Fade>
  );
}

export default PlaceRental;
