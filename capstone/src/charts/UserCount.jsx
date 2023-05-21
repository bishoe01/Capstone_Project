import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserCount() {
  const [visitors, setVisitors] = useState(0);
  const [monthly, setMonthly] = useState(0);
  const [today, setToday] = useState(0);
  const URL = 'https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app';

  useEffect(() => {
    const orderDate = new Date();
    const month = orderDate.getMonth() + 1;
    const today = orderDate.getDate();

    const fetchData = async () => {
      let JWT_TOKEN = localStorage.getItem('JWT');
      if (JWT_TOKEN !== null) {
        await axios
          .get(`${URL}/api/order/statistics?year=2023&month=${month}`, {
            headers: { Authorization: `Bearer ${JWT_TOKEN}` },
          })
          .then((res) => {
            let monthlyData = res.data;
            setMonthly(monthlyData.length);
            let dailyData = monthlyData.filter((data) => parseInt(data.date.split('-')[2]) === today);
            setToday(dailyData.length);
          });
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='w-64 border-2 border-[#ececec] px-5 py-4'>
        <h3 className='text-xl w-32 text-center border-t-[3px] border-primary font-[main]'>전체 방문자 수</h3>
        <div className='flex items-center mt-2'>
          <img src='images/profile.png' alt='' className='w-16 h-16 font-extrabold' />
          <div className='text-4xl mx-auto pt-3 font-[bold] text-center'>{visitors}</div>
        </div>
      </div>
      <div className=' w-64 border-2 border-[#ececec] px-5 py-4'>
        <h3 className='text-xl w-32 text-center border-t-[3px] border-primary font-[main]'>이달 예약자 수</h3>
        <div className='flex  items-center mt-2'>
          <img src='images/profile.png' alt='' className='w-16 h-16 font-extrabold' />
          <div className='text-4xl mx-auto pt-3 font-[bold] text-center'>{monthly}</div>
        </div>
      </div>
      <div className=' w-64 border-2 border-[#ececec] px-5 py-4'>
        <h3 className='text-xl w-32 text-center border-t-[3px] border-primary font-[main]'>오늘 예약자 수</h3>
        <div className='flex items-center mt-2'>
          <img src='images/profile.png' alt='' className='w-16 h-16 font-extrabold' />
          <div className='text-4xl mx-auto pt-3 font-[bold] text-center'>{today}</div>
        </div>
      </div>
    </>
  );
}

export default UserCount;
