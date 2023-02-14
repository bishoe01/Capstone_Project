import React from 'react';

const BUTTON_STYLE = 'px-2  text-text rounded-lg before:align-middle';
const TITLE_STYLE = 'w-full text-left text-xs text-textgray';
const CONTENT_STYLE = 'text-sm text-primary text-center ';
const VERTICAL_LINE = 'border border-r border-sub h-6 m-auto';

const List = ({ history }) => {
  return (
    <>
      <div className='flex flex-row justify-around align-center border border-primary rounded-lg w-3/5 p-1'>
        <div className='flex flex-col justify-center align-center px-4 w-[15%]'>
          <span className='text-primary  text-center'>{history.category}</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col px-3 w-1/4'>
          <h3 className={TITLE_STYLE}>강의실/스터디룸</h3>
          <span className={CONTENT_STYLE}>{history.location}</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col px-3 w-1/5'>
          <h3 className={TITLE_STYLE}>이용시간</h3>
          <span className={CONTENT_STYLE}>{history.time}</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col px-3 w-[15%]'>
          <h3 className={TITLE_STYLE}>예약일자</h3>
          <span className={CONTENT_STYLE}>{history.date}</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col px-3 w-[10%]'>
          <h3 className={TITLE_STYLE}>인원</h3>
          <span className={CONTENT_STYLE}>{history.count}명</span>
        </div>
        <div className={VERTICAL_LINE} />
        <div className='flex flex-col justify-center align-center w-15 px-3'>
          {
            {
              reserved: <button className={BUTTON_STYLE + ' bg-primary'}>예약 완료</button>,
              complete: <button className={BUTTON_STYLE + ' bg-sub'}>사용 완료</button>,
              failed: <button className={BUTTON_STYLE + ' bg-textgray'}>예약 실패</button>,
              canceled: <button className={BUTTON_STYLE + ' bg-textgray'}>예약 취소</button>,
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
      <ul className='flex flex-col h-[215px] overflow-auto'>
        {histories.map((history) => {
          return (
            <li className='flex justify-center align-center py-1'>
              <List history={history} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default HistoryList;
