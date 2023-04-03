import React from 'react';
import styled from 'styled-components';
import './scrollBar.css';
import CommonBtn from '../../components/CommonBtn';

const TITLE_STYLE = 'w-full text-left text-sm text-textgray';
const CONTENT_STYLE = 'text-base text-primary text-center';
const VERTICAL_LINE = 'border border-r border-sub h-6 m-auto';

const StateDiv = ({ color, bgColor, text }) => {
  return <div className={`w-20 h-7 text-${color} text-base text-center bg-${bgColor} rounded-md p-1 mx-2 tracking-wide`}>{text}</div>;
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
        <div className='flex flex-col px-3 w-20%'>
          <h3 className={TITLE_STYLE}>이용시간</h3>
          <span className={CONTENT_STYLE}>{timeCast(history.startTime, history.endTime)}</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col px-3 w-15%'>
          <h3 className={TITLE_STYLE}>예약일자</h3>
          <span className={CONTENT_STYLE}>{history.date}</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col px-3 w-10%'>
          <h3 className={TITLE_STYLE}>인원</h3>
          <span className={CONTENT_STYLE}>4명</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col justify-center align-center w-15% px-3'>
          {
            {
              정상: <StateDiv color={'text'} bgColor={'primary'} text={'이용 완료'} />,
              반납: <StateDiv color={'text'} bgColor={'sub'} text={'사용 완료'} />,
              취소: <StateDiv color={'text'} bgColor={'gray-500'} text={'예약 취소'} />,
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
