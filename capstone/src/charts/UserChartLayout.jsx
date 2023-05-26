import React, { useState, useEffect } from 'react';
import RadarChart from './RadarChart';
import PieChart from './PieChart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../redux/slice/userDataSlice';
import Loading from '../components/Loading';
import ChartInfo from './ChartInfo';

function UserChartLayout({ name }) {
  const dispatch = useDispatch();
  const { loading, userData } = useSelector((state) => state.userData);
  const [lastMonthData, setLastMonthData] = useState([]);

  useEffect(() => {
    if (lastMonthData.length > 0) return;
    let JWT_TOKEN = localStorage.getItem('JWT');

    if (JWT_TOKEN !== null) {
      dispatch(fetchUserData(JWT_TOKEN));
    }
    if (userData.length > 0) {
      const orderDate = new Date();
      const year = orderDate.getFullYear();
      const lastMonth = new Date(orderDate.getFullYear(), orderDate.getMonth() - 1);
      const lastMonthNumber = lastMonth.getMonth() + 1;
      if (lastMonthNumber < 10) {
        const result = userData.filter((data) => data.date.includes(`${year}-0${lastMonthNumber}`));
        setLastMonthData(result);
      } else {
        const result = userData.filter((data) => data.date.includes(`${year}-${lastMonthNumber}`));
        setLastMonthData(result);
      }
    }
  }, [dispatch, userData, lastMonthData.length]);

  return (
    <>
      {!loading ? (
        userData.length <= 0 ? (
          <>
            <ChartInfo chartName={`${name}님의 지난달 예약 정보`} />
            <div className='w-full h-32 text-center leading-[128px]'>
              <span className=''>예약 내역이 존재하지 않습니다.</span>
            </div>
          </>
        ) : (
          <>
            <ChartInfo chartName={`${name}님의 지난달 예약 정보`} />
            <div className='flex justify-center items-center gap-8 w-full border-t-[3px] border-[#ececec]'>
              <RadarChart data={lastMonthData} />
              <div className='h-[340px] mb-[10px] border border-[#ececec] ' />
              <PieChart data={lastMonthData} />
            </div>
          </>
        )
      ) : (
        <>
          <Loading w={'264px'} h={'32px'} />
          <div className='flex justify-center items-center gap-8 w-full border-t-[3px] border-[#ececec]'>
            <Loading w={'536px'} h={'450px'} />
            <div className='h-[370px] border border-[#ececec]' />
            <Loading w={'536px'} h={'457px'} />
          </div>
        </>
      )}
    </>
  );
}

export default UserChartLayout;
