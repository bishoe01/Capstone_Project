import React, { useState, useEffect } from 'react';
import Container from '../../components/Container';
import Fade from 'react-reveal/Fade';
import SideMenu from '../../components/SideMenu';
import ReserveState from './ReserveState';
import HistoryList from './HistoryList';

import axios from 'axios';
import dayjs from 'dayjs';

function PlaceRental() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const JWT_TOKEN = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5aCIsImV4cCI6MTY4MDUyNjEwOSwiaWF0IjoxNjgwNTA4MTA5fQ.deY2ULENejBTp_PSfOZtLfs3Sxt1Ap2AYCsV7i6fkiXGfAgYeHjflH69PEop7dwOg-Yyd5hTU5zlTZW2H2IE2g';
    const URL = 'https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app';

    const fetchData = async () => {
      await axios
        .get(`${URL}/api/user/order`, {
          headers: { Authorization: `Bearer ${JWT_TOKEN}` },
        })
        .then((res) => {
          let data = res.data.sort((a, b) => {
            if (a.date < b.date) return 1;
            else if (a.date === b.date) {
              return a.startTime < b.startTime;
            } else return -1;
          });

          setHistory(data);
        });
    };
    fetchData();
  }, []);

  const timeFormat = (startTime, endTime) => {
    let start = Number.isInteger(startTime) ? startTime.toString() + ':00' : startTime.toString().split('.')[0] + ':30';
    let end = Number.isInteger(endTime) ? endTime.toString() + ':00' : endTime.toString().split('.')[0] + ':30';
    return start + ' ~ ' + end;
  };

  const stateCheck = (state, date) => {
    if (state === '정상') {
      let today = dayjs().format('YYYY-MM-DD');
      let remainDay = dayjs(today).diff(dayjs(date), 'day');

      return <h3 className='text-emphasize pl-8'>{remainDay === 0 ? '금일 이용 예정' : remainDay}</h3>;
    } else if (state === '반납') {
      return <h3 className='text-primary pl-8'>반납 완료</h3>;
    }
    return <h3 className='text-gray-700 pl-8'>취소된 예약</h3>;
  };

  const click = () => {
    let today = dayjs().format('YYYY-MM-DD');

    console.log(dayjs(today).diff(dayjs(history[0].date), 'day'));
  };

  return (
    <Fade>
      <Container>
        <SideMenu />
        <div className='w-full'>
          <div className='py-8'>
            <h3 className='pl-24 text-primary font-black text-2xl'>예약현황</h3>
            {history.slice(0, 2).map((data, i) => {
              return <ReserveState state={stateCheck(data.state)} location={data.building + ' ' + data.location + ' ' + data.studyRoomName} time={timeFormat(data.startTime, data.endTime)} name={data.name} headCount={3} date={data.date} key={i} />;
            })}
          </div>
          <div className='w-full'>
            <h3 className='px-24 text-primary font-black text-2xl' onClick={click}>
              예약내역
            </h3>
            <HistoryList histories={history} />
          </div>
        </div>
      </Container>
    </Fade>
  );
}

export default PlaceRental;
