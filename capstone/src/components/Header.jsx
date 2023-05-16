import React, { useEffect, useState } from 'react';
import { BsBook } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { useRoomContext } from '../context/Roomdata';
import axios from 'axios';

function HeaderContantWithLogin() {
  const informationLinks = ['Profile', 'PlaceRental', 'Notice'];

  return informationLinks.map((link, index) => (
    <li className=' hover:text-emphasize' key={index}>
      <Link to={`dashboard/${link.toLowerCase()}`}>{link}</Link>
    </li>
  ));
}

function Header() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const links = ['Home', 'Reserve', 'Contact'];
  const { jwt, hours, url, reactionArray, filteredHours, user, location } = useRoomContext();
  useEffect(() => {
    if (localStorage.getItem('JWT') !== null) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
      navigate('/');
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem('JWT');
    navigate('/');
    window.location.reload();
  };


  return (
    <header className='flex justify-between items-center p-6 border-b-2 border-sub text-2xl text-primary'>
      <Link to={'/'} className='flex items-center'>
        <BsBook />
        <p className='ml-4 hover:text-emphasize'>HY-TOGETHER</p>
      </Link>
      <ul className='flex gap-5 text-lg'>
        {links.map((link, index) => {
          return (
            <li className=' hover:text-emphasize' key={index}>
              <Link to={`/${link.toLowerCase()}/${link == 'Reserve' && location[user.university]}`}>{link}</Link>
            </li>
          );
        })}

        {isLogin ? (
          <>
            <HeaderContantWithLogin />
            <li className='text-gray-600 hover:cursor-pointer' onClick={logoutHandler}>
              Log Out
            </li>
          </>
        ) : (
          <>
            <li className=' hover:text-emphasize'>
              <Link to={`login`}>Log In</Link>
            </li>
            <li className=' hover:text-emphasize'>
              <Link to={`register`}>Register</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
