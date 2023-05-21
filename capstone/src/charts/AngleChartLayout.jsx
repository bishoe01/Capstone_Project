import React, { useEffect } from 'react';
import AngleCircleChart from './AngleCircleChart';
import ChartInfo from './ChartInfo';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllData } from '../redux/slice/allDataSlice';
import { fetchUnivData } from '../redux/slice/univDataSlice';
import Loading from '../components/Loading';

function AngleChartLayout({ univ }) {
  const dispatch = useDispatch();
  const { loadingAll, allData } = useSelector((state) => state.allData);
  const { loadingUniv, univData } = useSelector((state) => state.univData);

  useEffect(() => {
    if (allData > 0 && univData.length > 0) return;
    let JWT_TOKEN = localStorage.getItem('JWT');
    if (JWT_TOKEN !== null) {
      dispatch(fetchAllData({ url: '/api/order/statistics?university=', jwt: JWT_TOKEN }));
      dispatch(fetchUnivData({ univ: univ, jwt: JWT_TOKEN }));
    }
  }, []);
  return (
    <>
      {!loadingAll && !loadingUniv ? (
        <>
          <ChartInfo chartName={'인원별 예약 현황'} />
          <div
            className='flex flex-col items-center max-w-[524px]'
            onClick={() => {
              console.log(allData);
              console.log(univData);
            }}>
            <div className='flex items-center w-full'>
              <AngleCircleChart data={univData} colors={['#335BFF', '#99C7FF', '#CCE3FF']} />
              <AngleCircleChart data={allData} colors={['#4D4DFF', '#A6BCFF', '#D3DEFF']} />
            </div>
            <div className='flex justify-around items-center w-full'>
              <span className='text-lg mt-[-20px]'>단과대 현황</span>
              <span className='text-lg mt-[-20px]'>전체 현황</span>
            </div>
          </div>
        </>
      ) : (
        <Loading w={'524px'} h={'346px'} />
      )}
    </>
  );
}

export default AngleChartLayout;
