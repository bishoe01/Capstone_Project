import React, { useState } from 'react';
import '../App.css';
import styles from '../styles';
import { VscEye } from 'react-icons/vsc';
import { FaRegBuilding } from 'react-icons/fa';
import { IoBarChartSharp } from 'react-icons/io5';
import { BsClipboardData, BsFillChatSquareQuoteFill, BsLightningCharge, BsGrid3X3GapFill } from 'react-icons/bs';
import { MdOutlineAddchart } from 'react-icons/md'
import { Fade } from 'react-reveal';
function Home({ props }) {
  const [data, setData] = useState([])
  const BANNER_STYLE = `flex justify-center items-center w-[300px] gap-3 text-primary`
  const FUNCTION_STYLE = `w-full flex flex-col gap-4 justify-center items-center py-8 p-4 border-2 bg-primary rounded-xl`
  return (
    <section className={`mx-auto w-full flex flex-col  items-center jumbotron gap-5`}>
      <Fade top>
        <div className='flex border-primary h-[400px] rounded-xl mt-4 relative z-0 px-16 justify-between items-center'>
          {/* TEXT BOX */}
          <div className='text-primary flex justify-center items-start flex-col w-[600px] gap-4'>
            <p id='bolder' className='flex flex-col items-start gap-6 text-5xl tracking-wider border-b-[2px] py-3 border-emphasize'>
              <span>HY</span><span>TOGETHER</span></p>
            <span className='text-sub brightness-75 text-xl'>한양대학교 ERICA 팀플실 예약 플랫폼</span>
            <div className='flex justify-center items-center gap-4 text-xl'>
              <button className='p-4 px-6 mt-5 border-[4px] border-emphasize rounded-full text-emphasize'>예약하러 가기</button>
              <button className='p-4 px-4 mt-5 border-[4px] border-primary rounded-full text-primary'>데이터 보기</button>
            </div>
          </div>
          {/* IMAGE BOX */}
          <img className='z-2 w-[600px] object-contain rounded-2xl mt-20' src="images/Hero_image.png" alt="" />
        </div>
      </Fade>
      {/* minibanner */}
      <Fade bottom>
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
      <div className='flex gap-2 items-center justify-around relative h-[400px] w-full'>
        <Fade left>
          <div right className='flex justify-start items-center gap-4 bg-white w-[800px] h-[100px] p-4 px-4 rounded-xl absolute top-[50px] left-0'>
            <BsFillChatSquareQuoteFill className='text-6xl text-emphasize' />
            <h4 className='text-2xl text-primary font-bold'>예약되어 있어서 사용을 못했는데, 아무도 없었던 적이 있었어요</h4>
          </div>
        </Fade>
        <Fade right>
          <div className='flex justify-start items-center gap-4 bg-white w-[800px] h-[100px] p-4 px-4 rounded-xl absolute top-[170px] right-[170px]'>
            <BsFillChatSquareQuoteFill className='text-6xl text-emphasize' />
            <h4 className='text-2xl text-primary font-bold'>자리를 맡아서 하루 종일 사용하시는 분들이 많아서 자리가 없어요</h4>
          </div>
        </Fade>
        <Fade left>
          <div className='flex justify-start items-center gap-4 bg-white w-[800px] h-[100px] p-4 px-4 rounded-xl absolute top-[290px] right-0'>
            <BsFillChatSquareQuoteFill className='text-6xl text-emphasize' />
            <h4 className='text-2xl text-primary font-bold'>자리를 맡아서 하루 종일 사용하시는 분들이 많아서 자리가 없어요</h4>
          </div>
        </Fade>
      </div>
      {/* SERVICE 설명 */}
      <div className='flex flex-col mt-10 gap-4 justify-start py-12 items-center w-full rounded-[50px]'>
        <h1 className='text-4xl font-bold text-primary'>HY - TOGETHER</h1>
        <div className='text-primary border-2 border-white p-2 rounded-full px-4'>
          <span className='text-[22px] mt-[1px]'>대학 내 팀플실을 자유롭게 예약 & 관리</span>
        </div>
      </div>
      <div className='flex flex-col w-full h-[500px] text-2xl'>
        <div className={`${FUNCTION_STYLE} text-white`}>
          <MdOutlineAddchart className='text-6xl text-emphasize' />
          <h1>생산성과 투명성을 위한 팀플실 사용 데이터 제공</h1>
        </div>
        <div className='flex text-white gap-[2px]'>
          <div className={FUNCTION_STYLE}>
            <h1>단과대학별 팀플실 예약 시스템 통일</h1>
          </div>
          <div className={FUNCTION_STYLE}>
            <BsLightningCharge className='text-6xl text-emphasize' />
            <h1>팀플실 예약 및 취소 간편화</h1>
          </div>
        </div>


      </div>
    </section>
  );
}



export default Home;