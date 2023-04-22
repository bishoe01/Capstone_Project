import React, { useState, useCallback, useMemo } from 'react';
import CommonBtn from './CommonBtn';
import RoomReturnModal from './RoomReturnModal';
import RoomExtendModal from './RoomExtendModal';
import RoomCancelModal from './RoomCancelModal';

import dayjs from 'dayjs';

const TAG_STYLE = 'rounded-xl bg-primary text-primary text-sm text-text py-0.5 px-1.5 mx-1 before:align-middle tracking-wider';

function ReserveState({ state, building, location, studyRoomName, startTime, endTime, name, bookingCapacity, date, studyRoomId, orderId, JWT_TOKEN }) {
  const [isOpenReturnModal, setOpenReturnModal] = useState(false);
  const [isOpenExtendModal, setOpenExtendModal] = useState(false);
  const [isOpenCancelModal, setOpenCancelModal] = useState(false);
  const [reservationState, setReservationState] = useState('이용예정'); //이용중, 이용예정, 반납완료
  const showReturnModal = () => {
    setOpenReturnModal(true);
  };

  const showExtendModal = () => {
    setOpenExtendModal(true);
  };

  const showCancelModal = () => {
    setOpenCancelModal(true);
  };

  const timeFormat = (startTime, endTime) => {
    let start = Number.isInteger(startTime) ? startTime.toString() + ':00' : startTime.toString().split('.')[0] + ':30';
    let end = Number.isInteger(endTime) ? endTime.toString() + ':00' : endTime.toString().split('.')[0] + ':30';
    return start + ' ~ ' + end;
  };

  // const stateCheck = (state, date, time) => {
  //   if (state === '정상') {
  //     let today = dayjs().format('YYYY-MM-DD');
  //     let remainDay = dayjs(date).diff(dayjs(today), 'day');
  //     let curTime = dayjs().format('HH:mm');
  //     let startTime = Number.isInteger(time) ? time.toString() + ':00' : time.toString().split('.')[0] + ':30';
  //     if (remainDay > 0) {
  //       setReservationState('이용예정');
  //       return <h3 className='text-emphasize pl-8'>{`${remainDay}일 후 이용예정`}</h3>;
  //     } else if (remainDay === 0 && curTime < startTime) {
  //       return <h3 className='text-emphasize pl-8'>금일 이용예정</h3>;
  //     } else {
  //       return <h3 className='text-emphasize pl-8'>이용중</h3>;
  //     }
  //   } else if (state === '반납') {
  //     return <h3 className='text-primary pl-8'>반납 완료</h3>;
  //   }
  //   return <h3 className='text-gray-700 pl-8'>취소된 예약</h3>;
  // };

  const stateCheck = (state, date, time) => {
    if (state === '정상') {
      let today = dayjs().format('YYYY-MM-DD');
      let remainDay = dayjs(date).diff(dayjs(today), 'day');
      let curTime = dayjs().format('HH:mm');
      let startTime = Number.isInteger(time) ? time.toString() + ':00' : time.toString().split('.')[0] + ':30';
      if (remainDay > 0) {
        setReservationState('이용예정');
        return <h3 className='text-emphasize pl-8'>{`${remainDay}일 후 이용예정`}</h3>;
      } else if (remainDay === 0 && curTime < startTime) {
        setReservationState('이용예정');
        return <h3 className='text-emphasize pl-8'>금일 이용예정</h3>;
      } else {
        setReservationState('이용중');
        return <h3 className='text-emphasize pl-8'>이용중</h3>;
      }
    } else if (state === '반납') {
      setReservationState('반납완료');
      return <h3 className='text-primary pl-8'>반납 완료</h3>;
    }
    return <h3 className='text-gray-700 pl-8'>취소된 예약</h3>;
  };
  const curstate = useMemo(() => stateCheck(state, date, startTime), [state, date, startTime]);

  const BtnSelector = useCallback(
    (reservationState) => {
      if (reservationState === '이용중')
        return (
          <>
            <CommonBtn width={20} height={7} color={'text'} bgColor={'emphasize'} text={'시간연장'} onClick={showExtendModal} />
            {isOpenExtendModal && <RoomExtendModal setOpenExtendModal={setOpenExtendModal} orderId={orderId} studyRoomId={studyRoomId} date={date} time={[startTime, endTime]} bookingCapacity={bookingCapacity} JWT_TOKEN={JWT_TOKEN} />}
            <CommonBtn width={20} height={7} color={'text'} bgColor={'sub'} text={'퇴실'} onClick={showReturnModal} />
            {isOpenReturnModal && <RoomReturnModal setOpenReturnModal={setOpenReturnModal} orderId={orderId} studyRoomId={studyRoomId} state={state} buildin={building} location={location} name={name} date={date} startTime={startTime} endTime={endTime} bookingCapacity={bookingCapacity} JWT_TOKEN={JWT_TOKEN} />}
          </>
        );
      else if (reservationState === '이용예정') {
        return (
          <>
            <CommonBtn width={20} height={7} color={'text'} bgColor={'gray-500'} text={'예약취소'} onClick={showCancelModal} JWT_TOKEN={JWT_TOKEN} />
            {isOpenCancelModal && <RoomCancelModal setOpenCancelModal={setOpenCancelModal} orderId={orderId} studyRoomId={studyRoomId} studyRoomName={studyRoomName} state={'반납'} building={building} location={location} name={name} date={date} startTime={startTime} endTime={endTime} bookingCapacity={bookingCapacity} JWT_TOKEN={JWT_TOKEN} />}
          </>
        );
      } else {
        return <></>;
      }
    },
    [isOpenCancelModal, isOpenExtendModal, isOpenReturnModal]
  );

  return (
    <>
      <div className='flex flex-col justify-center items-center py-2 min-w-[932px]'>
        <div className='w-[80%] flex flex-row border border-sub rounded-2xl shadow-[0px_2px_4px_rgba(0,0,0,0.18)]'>
          <div className='basis-1/2'>
            <ul className='flex flex-col justify-around items-center h-full px-4 py-3 border-r border-dotted border-sub'>
              <li className='w-full'>
                <div className='flex flex-row justify-start items-center'>
                  <img src='../icons/location.png' alt='' className='w-5 h-5 mr-2' />
                  <span className='text-primary align-middle leading-normal text-base'>{`${location} ${building} ${studyRoomName}`}</span>
                </div>
              </li>
              <li className='w-full'>
                <div className='flex flex-row justify-start items-center py-2'>
                  <img src='../icons/clock.png' alt='' className='w-5 h-5 mr-2' />
                  <span className='text-primary align-middle text-base'>{timeFormat(startTime, endTime)}</span>
                </div>
              </li>
              <li className='w-full'>
                <div className='flex flex-row justify-start items-center'>
                  <img src='../icons/sharp.png' alt='' className='w-5 h-5 mr-2' />
                  <span className={TAG_STYLE}>디스플레이</span>
                  <span className={TAG_STYLE}>음료 반입</span>
                </div>
              </li>
            </ul>
          </div>
          <div className='flex flex-row basis-1/2 py-1 px-[2%]'>
            <div className='flex flex-col justify-around basis-3/4 h-full'>
              {/* {stateCheck(state, date, startTime)} */}
              {curstate}
              <div className='flex flex-col'>
                <h3 className='w-full text-left text-base text-textgray'>예약자</h3>
                <span className='text-primary text-sm pl-4'>{`${name} 외 ${bookingCapacity - 1}명`}</span>
              </div>
              <div className='flex flex-col'>
                <h3 className='w-full text-left text-base text-textgray'>예약일자</h3>
                <span className='text-primary text-sm pl-4'>{date}</span>
              </div>
            </div>
            <div className='flex flex-col justify-around items-center basis-1/4'>{state === '정상' ? BtnSelector(reservationState) : null}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReserveState;
