import React, { useState, useEffect } from 'react';
import axios from 'axios';

import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';
import AngleChartLayout from './AngleChartLayout';
import TreemapChart from './TreemapChart';
import AreaChart from './AreaChart';
import UserChartLayout from './UserChartLayout';

function ChartLayout() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const fetchAllData = async () => {
      let JWT_TOKEN = localStorage.getItem('JWT');
      if (Object.keys(userInfo).length > 0) return;
      if (JWT_TOKEN !== null) {
        await axios
          .get(`https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app/api/user/info`, {
            headers: { Authorization: `Bearer ${JWT_TOKEN}` },
          })
          .then((res) => {
            setUserInfo(res.data);
          });
      }
    };
    fetchAllData();
  }, [userInfo]);

  return (
    <>
      {Object.keys(userInfo).length > 0 ? (
        <div className='w-full'>
          <div className='flex justify-between gap-8 w-full mb-10'>
            <BarChart />
          </div>

          <div className='flex justify-center items-center gap-8 mb-10'>
            <AreaChart />
            <TreemapChart univ={userInfo.university} />
          </div>
          <div className='flex justify-center items-center gap-8 w-full mb-10'>
            <LineChart univ={userInfo.university} />
            <div className='flex flex-col justify-between w-full'>
              <AngleChartLayout univ={userInfo.university} />
            </div>
          </div>
          <UserChartLayout name={userInfo.name} />
        </div>
      ) : null}
    </>
  );
}

export default ChartLayout;
