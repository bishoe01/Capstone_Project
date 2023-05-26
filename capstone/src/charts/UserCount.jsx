import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';

function UserCount() {
  const [visitors, setVisitors] = useState(1);
  const [monthly, setMonthly] = useState(-999);
  const [daily, setDaily] = useState(-999);
  const URL = 'https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app';

  useEffect(() => {
    if (visitors >= 0 && monthly >= 0 && daily >= 0) return;
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
            setDaily(dailyData.length);
          });
      }
    };
    fetchData();
  }, [visitors, monthly, daily]);

  return (
    <>
      {visitors >= 0 && monthly >= 0 && daily >= 0 ? (
        <>
          {/* <div className='w-64 border-2 border-[#ececec] px-5 py-4'>
            <h3 className='text-xl w-32 text-center border-t-[3px] border-primary font-[main]'>전체 방문자 수</h3>
            <div className='flex items-center mt-2'>
              <img src='images/profile.png' alt='' className='w-16 h-16 font-extrabold' />
              <div className='text-4xl mx-auto pt-3 font-[bold] text-center'>{visitors}</div>
            </div>
          </div> */}
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
              <div className='text-4xl mx-auto pt-3 font-[bold] text-center'>{daily}</div>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* <div className='w-64 border-2 border-[#ececec] px-5 py-4'>
            <Loading w={'128px'} h={'26px'} />
            <div className='flex items-center mt-2'>
              <img src='images/profile.png' alt='' className='w-16 h-16 font-extrabold mr-[42px]' />
              <Loading w={'64px'} h={'42px'} className='' />
            </div>
          </div> */}
          <div className=' w-64 border-2 border-[#ececec] px-5 py-4'>
            <Loading w={'128px'} h={'26px'} />
            <div className='flex  items-center mt-2'>
              <img src='images/profile.png' alt='' className='w-16 h-16 font-extrabold mr-[42px]' />
              <Loading w={'64px'} h={'42px'} className='' />
            </div>
          </div>
          <div className=' w-64 border-2 border-[#ececec] px-5 py-4'>
            <Loading w={'128px'} h={'26px'} />
            <div className='flex items-center mt-2'>
              <img src='images/profile.png' alt='' className='w-16 h-16 font-extrabold mr-[42px]' />
              <Loading w={'64px'} h={'42px'} className='' />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default UserCount;
