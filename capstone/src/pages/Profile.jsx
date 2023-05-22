import React, { useEffect } from 'react';
import Container from '../components/Container';
import Fade from 'react-reveal/Fade';
import CommonBtn from '../components/CommonBtn';
import { AiFillCamera } from 'react-icons/ai';
import { useUserState, useUserDispatch, getUser } from '../context/UserData';
import { Slide } from 'react-reveal';

function Profile() {
  //context이용
  const CATEGORY_TITLE = "text-2xl font-bold text-emphasize"
  const state = useUserState();
  const dispatch = useUserDispatch();

  const { data: users } = state.users;
  const fetchData = async () => {
    await getUser(dispatch);
  };

  useEffect(() => {
    fetchData();
    console.log(users);
  }, []);

  return (
    <Slide left>
      <div className='mt-10 flex flex-col justify-center relative'>
        <img src={`/images/하냥이_소프트웨어융합대학.png`} alt='profile'
          className='border-4 border-primary rounded-xl w-[250px] h-[250px] object-contain' />
        <div className='absolute flex justify-center items-center bg-black w-[250px] h-[50px] p-4 bottom-0 opacity-75'>
          <AiFillCamera className='text-white text-4xl' />
        </div>
      </div>
      <div className='flex flex-col h-[600px] gap-4 border-4 border-sub mt-10 rounded-2xl p-8'>
        <h1 className='text-3xl font-bold text-primary tracking-wider'>Profile Settings</h1>
        <div className='flex'>
          <div className='flex flex-col justify-center items-center gap-2 py-2'>
          </div>
          <div className='grid grid-cols-2 gap-4 w-[600px] ml-10'>
            <div className='flex flex-col bg-sub rounded-xl h-[100px] p-4 justify-center items-start'>
              <h1 className='text-xl text-textgray font-bold'>이름</h1>
              <span className='border-2 border-sub rounded-md w-[70%] p-[4px] mt-[4px] text-2xl'>
                {users?.name}
              </span>

            </div>
            <div className='flex flex-col'>
              <h1>이름</h1>
              <input type='text' className='border-2 border-sub rounded-md' />

            </div>
            <div className='flex flex-col'>
              <h1>이름</h1>
              <input type='text' className='border-2 border-sub rounded-md' />
            </div>
          </div>
        </div>
      </div>
      {/* <div className='w-full'>
        <h3 className='px-24 text-primary font-black text-xl before:align-middle' onClick={click}>
          프로필 설정
        </h3>
        <div className='flex justify-center items-center min-w-[800px]'>
          <div className='w-3/4'>
            <div className='flex border-b border-b-sub py-5 w-full'>
              <div className='flex flex-col justify-center items-center basis-1/2'>
                <img src={`/images/하냥이_소프트웨어융합대학.png`} alt='profile' className='border rounded-full w-[120px] h-[120px]' />
                <div className='flex justify-center w-full py-1'>
                  <CommonBtn width={28} height={7} color={'text'} bgColor={'sub'} text={'기본 프로필'} />
                  <CommonBtn width={24} height={7} color={'text'} bgColor={'primary'} text={'사진 편집'} />
                </div>
              </div>
              <div className='flex flex-col justify-center items-center basis-1/2 px-4 pt-24'>
                <h3 className='w-full text-left text-sm text-primary'>이름</h3>
                <div className='flex flex-row justify-between items-center w-full px-4 py-2'>
                  <span className='text-base'>{users?.name}</span>
                </div>
              </div>
            </div>
            <div className='flex border-b border-b-sub py-5 w-full'>
              <div className='flex flex-col justify-center items-center basis-1/2'>
                <h3 className='w-full text-left text-sm text-primary'>이메일</h3>
                <div className='flex flex-row justify-between items-center w-full px-4 pt-2'>
                  <span className='text-base'>{users?.email}</span>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center basis-1/2 px-4'>
                <h3 className='w-full text-left text-sm text-primary'>학번</h3>
                <div className='flex flex-row justify-between items-center w-full px-4 py-2'>
                  <span className='text-base'>{users?.studentNumber}</span>
                </div>
              </div>
            </div>
            <div className='flex border-b border-b-sub py-5 w-full'>
              <div className='flex flex-col justify-center items-center basis-1/2'>
                <h3 className='w-full text-left text-base text-primary'>소속 대학</h3>
                <div className='flex flex-row justify-between items-center w-full px-4 pt-2'>
                  <span className='text-base'>{users?.university}</span>
                </div>
              </div>
              <div className='flex flex-col justify-center items-center basis-1/2 px-4'>
                <h3 className='w-full text-left text-base text-primary'>소속 학부</h3>
                <div className='flex flex-row justify-between items-center w-full px-4 py-2'>
                  <span className='text-base'>{users?.department}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    </Slide>
  );
}



export default Profile;