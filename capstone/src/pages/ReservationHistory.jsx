import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import Fade from 'react-reveal/Fade';
import ReserveState from '../components/ReserveState';
import HistoryList from '../components/HistoryList';

import axios from 'axios';

function PlaceRental() {
  const [history, setHistory] = useState([]);
  const [isExistHistory, setIsExistHistory] = useState(false);
  const [JWT, setJWT] = useState('');

  useEffect(() => {
    const URL = 'https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app';

    const fetchData = async () => {
      let JWT_TOKEN = localStorage.getItem('JWT');
      await axios
        .get(`${URL}/api/user/order`, {
          headers: { Authorization: `Bearer ${JWT_TOKEN}` },
        })
        .then((res) => {
          setJWT(JWT_TOKEN);
          let data = res.data.sort((a, b) => {
            if (a.date < b.date) return 1;
            else if (a.date === b.date) {
              return b.startTime - a.startTime;
            } else return -1;
          });
          setHistory(data);
          setIsExistHistory(data.length);
        });
    };
    fetchData();
  }, []);

  return (
    <Fade>
      <Container>
        <div className='w-full'>
          <div className='pb-8'>
            <div className='flex justify-between items-center'>
              <h3 className='pl-24 text-primary font-black text-2xl'>예약현황</h3>
              <span className=' text-gray-500 pr-16 text-sm'>시간연장, 퇴실은 이용중에만 가능합니다.</span>
            </div>
            {history.slice(0, 2).map((data, i) => {
              return <ReserveState {...data} JWT_TOKEN={JWT} key={i} />;
            })}
          </div>
          <div className='w-full'>
            <h3 className='px-24 text-primary font-black text-2xl'>예약내역</h3>
            <HistoryList histories={history} />
          </div>
        </div>
        {/* {isExistHistory ? (
        ) : (
          <div className='w-full'>
            <div className='pb-8 text-center text-xl'>예약 내역이 존재하지 않습니다.</div>
          </div>
        )} */}
      </Container>
    </Fade>
  );
}

export default PlaceRental;
