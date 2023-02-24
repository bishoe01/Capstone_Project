import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Container from '../../components/Container';
import Fade from 'react-reveal/Fade';
import SideMenu from '../../components/SideMenu';

const InfoBox = ({ leftHeader, leftContent, rightHeader, rightContent, isEditBtn }) => {
  return (
    <div className='flex border-b border-b-sub py-5 w-full'>
      <div className='flex flex-col justify-center items-center basis-1/2'>
        <h3 className='w-full text-left text-sm text-primary'>{leftHeader}</h3>
        <div className='flex flex-row justify-between items-center w-full px-4 pt-2'>
          <span className='text-sm'>{leftContent}</span>
          {isEditBtn ? <button className='w-[72px] h-7 min-w-[72px] mr-[20px] text-text text-base text-center bg-primary rounded-md py-1 px-4'>편집</button> : null}
        </div>
      </div>
      <div className='flex flex-col justify-center items-center w-[50%] px-4'>
        <h3 className='w-full text-left text-sm text-primary'>{rightHeader}</h3>
        <div className='flex flex-row justify-between items-center w-full px-4 py-2'>
          <span className='text-sm'>{rightContent}</span>
        </div>
      </div>
    </div>
  );
};

function Profile() {
  return (
    <Fade>
      <Container>
        <SideMenu />
        <div className='w-full'>
          <h3 className='px-24 text-primary font-black text-lg'>프로필 설정</h3>
          <div className='flex flex-col justify-center items-center min-w-[800px]'>
            <div className='py-10  w-3/4'>
              <div className='flex border-b border-b-sub'>
                <div className='flex justify-between items-center basis-1/2'>
                  <div className='flex flex-col justify-center items-center'>
                    <img src={`/images/하냥이_소프트웨어융합대학.png`} className='border rounded-full w-[120px] h-[120px]' />
                    <span className='text-[10px] text-primary p-1'>프로필 이미지</span>
                  </div>
                  <button className='w-[108px] h-9 text-text text-base text-center bg-border rounded-md p-1'>기본 프로필</button>
                </div>
                <div className='flex justify-start items-center basis-1/2 px-4'>
                  <button className='w-[108px] h-9 text-text text-base text-center bg-primary rounded-md p-1'>사진 편집</button>
                </div>
              </div>
              <InfoBox leftHeader={'닉네임'} leftContent={'HanyangKim'} rightHeader={'이름'} rightContent={'김한양'} isEditBtn={true} />
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
