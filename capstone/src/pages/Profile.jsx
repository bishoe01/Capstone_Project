import React, { useEffect, useState } from 'react';
import Container from '../components/Container';
import Fade from 'react-reveal/Fade';
import CommonBtn from '../components/CommonBtn';
import { AiFillCamera } from 'react-icons/ai';
import { useUserState, useUserDispatch, getUser } from '../context/UserData';
import { Slide } from 'react-reveal';
import { useRoomContext } from '../context/Roomdata';
import axios from 'axios';
const INPUT_STYLE = "border-2 border-sub rounded-2xl w-[100%] px-4 py-4 mt-[4px] text-2xl";

function Infomation({ title, content, setUsername }) {

  return (
    <div className='flex flex-col rounded-xl h-[100px] p-4 justify-center items-start'>
      <h1 className='text-2xl text-primary font-bold'>{title}</h1>
      {title === "Username"
        ? <input className={`${INPUT_STYLE} `} value={content} />
        : <span className={`${INPUT_STYLE} `}>
          {content}
        </span>
      }


    </div>
  )


}

function Profile() {
  //context이용
  const CATEGORY_TITLE = "text-2xl font-bold text-emphasize";
  const state = useUserState();
  const dispatch = useUserDispatch();
  const { user, url, jwt } = useRoomContext();
  const [username, setUsername] = useState(user?.username);
  const { data: users } = state.users;
  const fetchData = async () => {
    await getUser(dispatch);
  };


  useEffect(() => {
    fetchData();
    console.log(users);
  }, []);

  const HandleUsername = () => {
    const token = `Bearer ${jwt}`;
    axios.put(`${url}/api/user/modify`,
      { ...user, "username": username }
      , {
        headers: {
          Authorization: token
        }
      })
  }

  return (
    <Fade top>
      <div className='flex flex-col gap-4 mt-10'>
        {/* <h1 className='text-4xl mt-4 font-bold text-primary tracking-wider'>Profile Settings</h1> */}
        <div className='overflow-hidden relative inline-block w-[250px] h-[250px] rounded-full hover:scale-105'>
          <img src={`/images/하냥이_소프트웨어융합대학.png`} alt='profile'
            className='border-[2px] border-primary rounded-full object-cover w-full h-full' />
          <div className='absolute flex justify-center items-center bg-black w-[250px] h-[50px] p-4 bottom-0 opacity-60'>
            <AiFillCamera className='text-white text-4xl' />
          </div>
        </div>
        <div className='flex flex-col h-[650px] gap-4 border-[0.5px] border-[#e1e2e4] mt-5 rounded-3xl p-8 shadow-xl'>
          <h1 className='text-4xl text-emphasize font-bold ml-4 mb-4'>Profile Settings</h1>
          <div className='flex'>
            <div className='grid grid-cols-2 gap-[24px] w-full'>
              <Infomation title='Name' content={users?.name} />
              <Infomation title='Username' content={users?.username} />
              <Infomation title="단과대학" content={users?.university} setUsername={setUsername} />
              <Infomation title="학년" content={users?.grade} />
              <Infomation title="학번" content={users?.studentNumber} />
              <Infomation title="Email" content={users?.email} />
              <Infomation title="소속학과(부)" content={users?.department} />
            </div>

          </div>
          {/* <button onClick={HandleUsername} className='p-5 w-[25%] ml-4 bg-primary rounded-full text-white text-2xl font-bold mt-4'>Edit</button> */}
        </div>
      </div>
    </Fade>
  );
}



export default Profile;