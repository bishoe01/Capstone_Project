import React from 'react';
import styled from 'styled-components';
import './scrollBar.css';
import CommonBtn from './CommonBtn';

const TITLE_STYLE = 'w-full text-left text-xl text-textgray';
const CONTENT_STYLE = 'text-[22px] text-primary text-center';
const VERTICAL_LINE = 'border border-r border-sub h-6 m-auto';

const StateDiv = ({ color, bgColor, text }) => {
  return <div className={`w-[150px] h-[55px] text-${color} leading-[55px] text-2xl text-center bg-${bgColor} rounded-xl  mx-2 tracking-wide`}>{text}</div>;
};

const List = ({ history }) => {
  const timeCast = (startTime, endTime) => {
    let start = Number.isInteger(startTime) ? startTime.toString() + ':00' : startTime.toString().split('.')[0] + ':30';
    let end = Number.isInteger(endTime) ? endTime.toString() + ':00' : endTime.toString().split('.')[0] + ':30';
    return start + ' ~ ' + end;
  };

  return (
    <>
      <div className='flex flex-row justify-around align-center border border-primary rounded-lg py-1 basis-11/12'>
        <div className='flex flex-col px-3 w-40%'>
          <h3 className={TITLE_STYLE}>팀플실</h3>
          <span className={CONTENT_STYLE}>{`${history.building} ${history.location} ${history.studyRoomName}`}</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col px-3 w-25%'>
          <h3 className={TITLE_STYLE}>이용시간</h3>
          <span className={CONTENT_STYLE}>{timeCast(history.startTime, history.endTime)}</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col px-3 w-25%'>
          <h3 className={TITLE_STYLE}>예약일자</h3>
          <span className={CONTENT_STYLE}>{history.date}</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col px-3 w-10%'>
          <h3 className={TITLE_STYLE}>인원</h3>
          <span className={CONTENT_STYLE}>{history.bookingCapacity}</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col justify-center items-center w-15%'>
          {
            {
              정상: <StateDiv color={'text'} bgColor={'primary'} text={'예약 완료'} />,
              반납: <StateDiv color={'text'} bgColor={'sub'} text={'반납 완료'} />,
              취소: <StateDiv color={'text'} bgColor={'gray-500'} text={'취소된 예약'} />,
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
      <ul className='h-[400px] min-w-[932px] overflow-auto scrollbar'>
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
