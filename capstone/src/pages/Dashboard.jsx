import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SideMenu from '../components/SideMenu';

import { useUserState, useUserDispatch, getUser } from '../context/UserData';

function Dashboard() {
  const state = useUserState();
  const dispatch = useUserDispatch();

  const { data: users } = state.users;
  const fetchData = async () => {
    await getUser(dispatch);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='flex flex-row justify-between items-center'>
      <SideMenu name={users?.name} />
      <Outlet />
    </div>
  );
}

export default Dashboard;
