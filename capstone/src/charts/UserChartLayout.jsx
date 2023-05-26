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
  const [isData, setData] = useState(false);

  useEffect(() => {
    if (isData) return;
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
      setData(true);
    }
  }, [dispatch, userData, isData]);

  return (
    <>
      {!loading ? (
        lastMonthData.length <= 0 ? (
          <>
            <ChartInfo chartName={`${name}님의 지난달 예약 정보`} />
            <div className='w-full h-32 text-center leading-[128px]'>
              <span className=''>예약 내역이 존재하지 않습니다.</span>
            </div>
          </>
        ) : (
          <>
            <div className='flex flex-col justify-center w-full h-14 relative items-center'>
              <h3 className='text-3xl text-primary p-4 py- rounded-full border-primary border-4'>{name}님의 지난달 예약 정보</h3>
            </div>
            <div className='flex justify-center items-center gap-8 w-full '>
              <RadarChart data={lastMonthData} />
              <div className='h-[300px] mb-[10px] border-[1px] border-sub ' />
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
