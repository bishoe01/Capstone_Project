import React, { useState } from 'react';
import '../App.css';
import styles from '../styles';
import { VscEye } from 'react-icons/vsc';
import { FaRegBuilding, FaReact } from 'react-icons/fa';
import { IoBarChartSharp } from 'react-icons/io5';
import { BsClipboardData, BsFillChatSquareQuoteFill, BsLightningCharge, BsGrid3X3GapFill } from 'react-icons/bs';
import { MdOutlineAddchart } from 'react-icons/md';
import { BiGitBranch } from 'react-icons/bi';
import { TbReportSearch } from 'react-icons/tb';
import { Fade, Flip, Slide, Zoom } from 'react-reveal';

function Home({ props }) {
  const [data, setData] = useState([]);
  const BANNER_STYLE = `flex justify-center items-center w-[300px] gap-3 text-primary`;
  const FUNCTION_STYLE = `w-full flex flex-col gap-4 justify-around items-center py-8 p-2 text-primary`;
  const ICON_URL = ['reactjs', 'tailwindcss', 'springio', 'figma'];
  return (
    <section className={`mx-auto w-full flex flex-col  items-center jumbotron gap-5`}>
      <Fade top>
        <div className='flex border-primary h-[400px] rounded-xl mt-4 relative z-0 px-16 justify-between items-center'>
          {/* TEXT BOX */}
          <div className='text-primary flex justify-center items-start flex-col w-[600px] gap-4'>
            <p id='bolder' className='flex flex-col items-start gap-6 text-5xl tracking-wider border-b-[2px] py-3 border-emphasize'>
              <span>HY</span>
              <span>TOGETHER</span>
            </p>
            <span className='text-sub brightness-75 text-xl'>한양대학교 ERICA 팀플실 예약 플랫폼</span>
            <div className='flex justify-center items-center gap-4 text-xl'>
              <button className='p-4 px-6 mt-5 border-[4px] border-emphasize rounded-full text-emphasize'>예약하러 가기</button>
              <button className='p-4 px-4 mt-5 border-[4px] border-primary rounded-full text-primary'>데이터 보기</button>
            </div>
          </div>
          {/* IMAGE BOX */}
          <img className='z-2 w-[600px] object-contain rounded-2xl mt-20' src='images/Hero_image.png' alt='' />
        </div>
      </Fade>
      {/* minibanner */}
      <Fade top cascade>
        <div className='flex justify-center items-center gap-[10px] w-[900px] h-[180px] rounded-2xl border-[0.1px] border-sub shadow-xl mt-5'>
          <div className={BANNER_STYLE}>
            <div className='flex flex-col justify-center items-center gap-3'>
              <FaRegBuilding className='text-5xl' />
              <h4 className='text-lg'>단과대학 개수</h4>
            </div>
            <span className='text-emphasize font-bold text-5xl'>8</span>
          </div>
          <div className='w-[2px] h-[60%] bg-sub rounded-full'></div>
          <div className={`${BANNER_STYLE}`}>
            <div className='flex flex-col justify-center items-center gap-3'>
              <BsGrid3X3GapFill className='text-5xl text-primary' />
              <h4 className='text-lg'>스터디룸 개수</h4>
            </div>
            <span className='text-emphasize font-bold text-5xl'>51</span>
          </div>
          <div className='w-[2px] h-[60%] bg-sub rounded-full'></div>
          <div className={BANNER_STYLE}>
            <div className='flex flex-col justify-center items-center gap-3'>
              <IoBarChartSharp className='text-5xl' />
              <h4 className='text-xl'>데이터 섹션</h4>
            </div>
            <span className='text-emphasize font-bold text-5xl'>12</span>
          </div>
        </div>
      </Fade>
      <Slide left cascade>
        <div className='flex gap-2 items-center justify-around relative h-[400px] w-full'>
          <div right className='flex justify-start items-center gap-4 bg-white w-[800px] h-[100px] p-4 px-4 rounded-xl absolute top-[50px] left-0'>
            <BsFillChatSquareQuoteFill className='text-6xl text-emphasize' />
            <h4 className='text-2xl text-primary font-bold'>예약되어 있어서 사용을 못했는데, 아무도 없었던 적이 있었어요</h4>
          </div>
          <div className='flex justify-start items-center gap-4 bg-white w-[800px] h-[100px] p-4 px-4 rounded-xl absolute top-[170px] right-[170px]'>
            <BsFillChatSquareQuoteFill className='text-6xl text-emphasize' />
            <h4 className='text-2xl text-primary font-bold'>자리를 맡아서 하루 종일 사용하시는 분들이 많아서 자리가 없어요</h4>
          </div>
          <div className='flex justify-start items-center gap-4 bg-white w-[800px] h-[100px] p-4 px-4 rounded-xl absolute top-[290px] right-0'>
            <BsFillChatSquareQuoteFill className='text-6xl text-emphasize' />
            <h4 className='text-2xl text-primary font-bold'>자리를 맡아서 하루 종일 사용하시는 분들이 많아서 자리가 없어요</h4>
          </div>
        </div>
      </Slide>
      {/* SERVICE 설명 */}
      <Fade>
        <div className='flex flex-col mt-24 justify-start items-center w-full'>
          <h1 className='text-5xl font-bold text-primary tracking-wider'>HY - TOGETHER</h1>
          <div className='text-primary p-2 rounded-full px-4  mt-[8px]'>
            <span className='text-[24px] text-textgray'>대학 내 팀플실을 자유롭게 예약 & 관리 시스템</span>
          </div>
        </div>
      </Fade>
      <div className='flex w-full h-[150px] text-2xl items-center justify-center'>
        <Flip left cascade>
          <div className={`${FUNCTION_STYLE}`}>
            <TbReportSearch className='text-6xl text-emphasize' />
            <h1 className='text-xl'>팀플실 사용 데이터 제공</h1>
          </div>
          <div className='w-[4px] h-[100px] rounded-xl bg-sub' />
          <div className={FUNCTION_STYLE}>
            <BiGitBranch className='text-6xl text-emphasize' />
            <h1 className='text-xl'>단과대학별 팀플실 예약 시스템 통일</h1>
          </div>
          <div className='w-[4px] h-[100px] rounded-xl bg-sub' />
          <div className={FUNCTION_STYLE}>
            <BsLightningCharge className='text-6xl text-emphasize' />
            <h1 className='text-xl'>팀플실 예약 및 취소 간편화</h1>
          </div>
        </Flip>
      </div>
      {/* SKILL STACK */}
      <Zoom cascade>
        <div className='flex flex-col justify-center gap-4 items-center w-[600px] h-[200px] rounded-b-none rounded-full bg-primary mt-12 '>
          <h1 className='text-3xl text-white tracking-wider'>기술 스택</h1>
          <div className='flex gap-2 w-full justify-center items-center'>
            {ICON_URL.map((icon, index) => (
              <div key={index} className=' bg-white shadow-xl rounded-2xl p-4'>
                <img className='w-[70px] h-[70px]' src={`images/${icon}-icon.svg`} alt='' />
              </div>
            ))}
          </div>
        </div>
      </Zoom>
    </section>
  );
}

export default Home;
