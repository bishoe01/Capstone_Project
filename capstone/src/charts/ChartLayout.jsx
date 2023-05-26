import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

import BarChart from '../charts/BarChart';
import LineChart from '../charts/LineChart';
import AngleChartLayout from './AngleChartLayout';
import TreemapChart from './TreemapChart';
import AreaChart from './AreaChart';
import UserChartLayout from './UserChartLayout';
import SideBar from './SideBar';

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

  const componentRefs = {
    Bar_Count: useRef(),
    Area_Treemap: useRef(),
    Line_Circle: useRef(),
    User: useRef(),
  };

  const scrollToComponent = (componentName) => {
    componentRefs[componentName].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {Object.keys(userInfo).length > 0 ? (
        <>
          <div className='w-full mt-10'>
            <div className='flex justify-between gap-8 w-full mb-10' ref={componentRefs.Bar_Count}>
              <BarChart />
            </div>

            <div className='flex justify-center items-center gap-8 mb-10' ref={componentRefs.Area_Treemap}>
              <AreaChart />
              <TreemapChart univ={userInfo.university} />
            </div>
            <div className='flex justify-center items-center gap-8 w-full mb-10' ref={componentRefs.Line_Circle}>
              <LineChart univ={userInfo.university} />
              <div className='flex flex-col justify-between w-full'>
                <AngleChartLayout univ={userInfo.university} />
              </div>
            </div>
            <div ref={componentRefs.User}>
              <UserChartLayout name={userInfo.name} />
            </div>
          </div>
          <SideBar onSelection={scrollToComponent} />
        </>
      ) : null}
    </>
  );
}

export default ChartLayout;
