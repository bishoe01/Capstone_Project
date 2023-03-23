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
          <span className='text-sm'>{leftContent}</span>
          {/* {isEditBtn ? <button className='w-[72px] h-7 min-w-[72px] mr-[20px] text-white text-base text-center bg-primary rounded-md py-1 px-4 '>편집</button> : null} */}
          {isEditBtn ? <CommonBtn width={20} height={7} color={'text'} bgColor={'primary'} text={'편집'} /> : null}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center basis-1/2 px-4'>
        <h3 className='w-full text-left text-sm text-primary'>{rightHeader}</h3>
        <div className='flex flex-row justify-between items-center w-full px-4 py-2'>
          <span className='text-sm'>{rightContent}</span>
        </div>
      </div>
    </div>
  );
};

function Profile() {
  const [userInfo, setInfo] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     await axios.get('/api/user/info').then((res) => {
  //       setInfo(res.data);
  //     });
  //   };

  //   fetchData();
  // }, []);

  return (
    <Fade>
      <Container>
        <SideMenu />
        <div className='w-full'>
          <h3 className='px-24 text-primary font-black text-lg before:align-middle'>프로필 설정</h3>
          <div className='flex flex-col justify-center items-center min-w-[800px]'>
            <div className='py-10  w-3/4'>
              <div className='flex border-b border-b-sub py-5 w-full'>
                <div className='flex flex-col justify-center items-center basis-1/2'>
                  <img src={`/images/하냥이_소프트웨어융합대학.png`} alt='profile' className='border rounded-full w-[120px] h-[120px]' />

                  <div className='flex justify-center w-full py-1'>
                    <CommonBtn
                      width={28}
                      height={7}
                      color={'text'}
                      bgColor={'border'}
                      text={'기본 프로필'}
                      onClick={() => {
                        console.log('commonbtn');
                      }}
                    />
                    <CommonBtn width={24} height={7} color={'text'} bgColor={'primary'} text={'사진 편집'} />
                  </div>
                </div>
                <div className='flex flex-col justify-center items-center basis-1/2 px-4 pt-24'>
                  <h3 className='w-full text-left text-sm text-primary'>이름</h3>
                  <div className='flex flex-row justify-between items-center w-full px-4 py-2'>
                    <span className='text-sm'>김한양</span>
                  </div>
                </div>
              </div>
              <InfoBox leftHeader={'이메일'} leftContent={'hanyang@ac.kr'} rightHeader={'학번'} rightContent={20180203921} isEditBtn={true} />
              <InfoBox leftHeader={'소속 대학'} leftContent={'소프트웨어융합대학'} rightHeader={'소속 학부'} rightContent={'컴퓨터학부/소프트웨어전공'} isEditBtn={false} />
            </div>
          </div>
        </div>
      </Container>
    </Fade>
  );
}

export default Profile;
