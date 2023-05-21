import React, { useEffect } from 'react';
import RadarChart from './RadarChart';
import PieChart from './PieChart';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserData } from '../redux/slice/userDataSlice';
import Loading from '../components/Loading';
import ChartInfo from './ChartInfo';

function UserChartLayout({ name }) {
  const dispatch = useDispatch();
  const { loading, userData } = useSelector((state) => state.userData);
  useEffect(() => {
    let JWT_TOKEN = localStorage.getItem('JWT');

    if (JWT_TOKEN !== null) {
      dispatch(fetchUserData(JWT_TOKEN));
    }
  }, [dispatch]);

  return (
    <>
      {!loading ? (
        <>
          <ChartInfo chartName={`${name}님의 지난달 예약 정보`} />
          <div className='flex justify-center items-center gap-8 w-full border-t-[3px] border-[#ececec]'>
            <RadarChart data={userData} />
            <div className='h-[340px] mb-[10px] border border-[#ececec] ' />
            <PieChart data={userData} />
          </div>
        </>
      ) : (
        <div className='flex justify-center items-center gap-8 w-full'>
          <Loading w={'507px'} h={'525px'} />
          <div className='h-[370px] border border-[#ececec]' />
          <Loading w={'507px'} h={'525px'} />
        </div>
      )}
    </>
  );
}

export default UserChartLayout;
