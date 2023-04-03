import React, { useState, useEffect } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Container from '../../components/Container';
import Fade from 'react-reveal/Fade';
import SideMenu from '../../components/SideMenu';
import CommonBtn from '../../components/CommonBtn';
import axios from 'axios';

const InfoBox = ({ leftHeader, leftContent, rightHeader, rightContent, isEditBtn }) => {
  return (
    <div className='flex border-b border-b-sub py-5 w-full'>
      <div className='flex flex-col justify-center items-center basis-1/2'>
        <h3 className='w-full text-left text-sm text-primary'>{leftHeader}</h3>
        <div className='flex flex-row justify-between items-center w-full px-4 pt-2'>
          <span className='text-base'>{leftContent}</span>
          {/* {isEditBtn ? <button className='w-[72px] h-7 min-w-[72px] mr-[20px] text-white text-base text-center bg-primary rounded-md py-1 px-4 '>편집</button> : null} */}
          {isEditBtn ? <CommonBtn width={20} height={7} color={'text'} bgColor={'primary'} text={'편집'} /> : null}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center basis-1/2 px-4'>
        <h3 className='w-full text-left text-sm text-primary'>{rightHeader}</h3>
        <div className='flex flex-row justify-between items-center w-full px-4 py-2'>
          <span className='text-base'>{rightContent}</span>
        </div>
      </div>
    </div>
  );
};

function Profile() {
  const [userInfo, setInfo] = useState('');

  useEffect(() => {
    const JWT_TOKEN = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ5aCIsImV4cCI6MTY4MDUyNjEwOSwiaWF0IjoxNjgwNTA4MTA5fQ.deY2ULENejBTp_PSfOZtLfs3Sxt1Ap2AYCsV7i6fkiXGfAgYeHjflH69PEop7dwOg-Yyd5hTU5zlTZW2H2IE2g';

    const URL = 'https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app';

    const fetchData = async () => {
      await axios
        .get(`${URL}/api/user/info`, {
          headers: { Authorization: `Bearer ${JWT_TOKEN}` },
        })
        .then((res) => {
          setInfo(res.data);
        });
    };
    fetchData();
  }, []);

  const editEmail = () => {};

  return (
    <Fade>
      <Container>
        <SideMenu />
        <div className='w-full'>
          <h3 className='px-24 text-primary font-black text-2xl before:align-middle'>프로필 설정</h3>
          <div className='flex flex-col justify-center items-center min-w-[800px]'>
            <div className='py-10  w-3/4'>
              <div className='flex border-b border-b-sub py-5 w-full'>
                <div className='flex flex-col justify-center items-center basis-1/2'>
                  <img src={`/images/하냥이_소프트웨어융합대학.png`} alt='profile' className='border rounded-full w-[120px] h-[120px]' />

                  <div className='flex justify-center w-full py-1'>
                    <CommonBtn width={28} height={7} color={'text'} bgColor={'sub'} text={'기본 프로필'} />
                    <CommonBtn width={24} height={7} color={'text'} bgColor={'primary'} text={'사진 편집'} />
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center basis-1/2 px-4 pt-24'>
                  <h3 className='w-full text-left text-base text-primary'>이름</h3>
                  <div className='flex flex-row justify-between items-center w-full px-4 py-2'>
                    <span className='text-lg'>{userInfo.name}</span>
                  </div>
                </div>
              </div>
              <div className='flex border-b border-b-sub py-5 w-full'>
                <div className='flex flex-col justify-center items-center basis-1/2'>
                  <h3 className='w-full text-left text-base text-primary'>이메일</h3>
                  <div className='flex flex-row justify-between items-center w-full px-4 pt-2'>
                    <span className='text-lg'>{userInfo.email}</span>
                    {/* <CommonBtn width={20} height={7} color={'text'} bgColor={'primary'} text={'편집'} onClick={editEmail} /> */}
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center basis-1/2 px-4'>
                  <h3 className='w-full text-left text-base text-primary'>학번</h3>
                  <div className='flex flex-row justify-between items-center w-full px-4 py-2'>
                    <span className='text-lg'>{userInfo.studentNumber}</span>
                  </div>
                </div>
              </div>
              <div className='flex border-b border-b-sub py-5 w-full'>
                <div className='flex flex-col justify-center items-center basis-1/2'>
                  <h3 className='w-full text-left text-base text-primary'>소속 대학</h3>
                  <div className='flex flex-row justify-between items-center w-full px-4 pt-2'>
                    <span className='text-lg'>{userInfo.university}</span>
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center basis-1/2 px-4'>
                  <h3 className='w-full text-left text-base text-primary'>소속 학부</h3>
                  <div className='flex flex-row justify-between items-center w-full px-4 py-2'>
                    <span className='text-lg'>{userInfo.department}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fade>
  );
}

export default Profile;
