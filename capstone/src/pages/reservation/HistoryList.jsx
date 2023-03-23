import React from 'react';
import styled from 'styled-components';
import './scrollBar.css';
import CommonBtn from '../../components/CommonBtn';

const TITLE_STYLE = 'w-full text-left text-sm text-textgray';
const CONTENT_STYLE = 'text-base text-primary text-center ';
const VERTICAL_LINE = 'border border-r border-sub h-6 m-auto';

const StateDiv = ({ color, bgColor, text }) => {
  return <div className={`w-20 h-7 text-${color} text-base text-center bg-${bgColor} rounded-md p-1 mx-2 tracking-wide`}>{text}</div>;
};

const List = ({ history }) => {
  return (
    <>
      <div className='flex flex-row justify-around align-center border border-primary rounded-lg p-1 basis-4/5'>
        {/* <div className='flex flex-col justify-center align-center px-4 w-15%'>
          <span className='text-primary  text-center'>{history.category}</span>
        </div>
        <div className={VERTICAL_LINE} /> */}
        <div className='flex flex-col px-3 w-30%'>
          <h3 className={TITLE_STYLE}>팀플실</h3>
          <span className={CONTENT_STYLE}>{history.location}</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col px-3 w-25%'>
          <h3 className={TITLE_STYLE}>이용시간</h3>
          <span className={CONTENT_STYLE}>{history.time}</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col px-3 w-20%'>
          <h3 className={TITLE_STYLE}>예약일자</h3>
          <span className={CONTENT_STYLE}>{history.date}</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col px-3 w-10%'>
          <h3 className={TITLE_STYLE}>인원</h3>
          <span className={CONTENT_STYLE}>{history.count}명</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col justify-center align-center w-15% px-3'>
          {
            {
              reserved: <StateDiv color={'text'} bgColor={'primary'} text={'예약 완료'} />,
              complete: <StateDiv color={'text'} bgColor={'sub'} text={'사용 완료'} />,
              failed: <StateDiv color={'text'} bgColor={'textgray'} text={'예약 실패'} />,
              canceled: <StateDiv color={'text'} bgColor={'textgray'} text={'예약 취소'} />,
            }[history.state]
          }
        </div>
      </div>
    </>
  );
};

function HistoryList({ histories }) {
  return (
    <>
      <ul className='h-[250px] min-w-[932px] overflow-auto scrollbar'>
        {histories.map((history, i) => {
          return (
            <li className='flex justify-center align-center py-1' key={i}>
              <List history={history} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default HistoryList;
