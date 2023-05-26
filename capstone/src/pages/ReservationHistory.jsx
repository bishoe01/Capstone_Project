import React, { useState, useEffect } from 'react';
import Container from '../components/Container';
import Fade from 'react-reveal/Fade';
import ReserveState from '../components/ReserveState';
import HistoryList from '../components/HistoryList';

import axios from 'axios';
import { useRoomContext } from '../context/Roomdata';

function PlaceRental() {
  const [history, setHistory] = useState([]);
  const [isExistHistory, setIsExistHistory] = useState(false);
  const [JWT, setJWT] = useState('');
  const { url } = useRoomContext();
  useEffect(() => {
    const fetchData = async () => {
      let JWT_TOKEN = localStorage.getItem('JWT');
      try {
        await axios
          .get(`${url}/api/user/order`, {
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
            setIsExistHistory(true);
          });
      } catch (err) {
        console.log(err);
        setIsExistHistory(false);
      }
    };

    fetchData();

    const timeout = setTimeout(() => {
      fetchData();
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  console.log(history);
  return (
    <Fade>
      <Container>
        <div className='w-full'>
          <div className='pb-8'>
            <div className='flex justify-between items-center'>
              <h3 className='px-10 mb-4 text-primary font-black text-3xl'>예약현황</h3>
              <span className=' text-gray-500 pr-16 text-xl'>시간연장, 퇴실은 이용중에만 가능합니다</span>
            </div>
            {history.slice(0, 2).map((data, i) => {
              return <ReserveState {...data} JWT_TOKEN={JWT} key={i} />;
            })}
          </div>
          <div className='w-full h-[500px]'>
            <h3 className='px-10 text-primary font-black text-3xl mb-4'>예약내역</h3>
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
