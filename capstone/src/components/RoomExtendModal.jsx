import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import { MyReservationBlock, ReservationExtendBlock, NoReservationBlock, ReservationBlock } from './Blocks';

function RoomExtendModal({ setOpenExtendModal, orderId, studyRoomId, date, time, bookingCapacity, JWT_TOKEN }) {
  const [timeData, setTimeData] = useState([]);
  const [blocks, setBlocks] = useState([]);
  const [recentBlockIdx, setRecentBlockIdx] = useState(0);
  const [maxExtendEndIdx, setMaxExtendEndIdx] = useState(0);
  const [extendStartIdx, setExtendStartIdx] = useState(0);
  const [extendedTime, setExtendedTime] = useState('');

  const blockCount = 30;
  const URL = 'https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app';

  useEffect(() => {
    const getData = async () =>
      await axios
        .get(`${URL}/api/studyroom/${studyRoomId}?date=${date}`, {
          headers: { Authorization: `Bearer ${JWT_TOKEN}` },
        })
        .then((res) => {
          let timeData = res.data.reservation.map((e) => [e.startTime, e.endTime]);
          setTimeData(timeData);
          setBlocks(timeBlock(timeData, time));
          setExtendStartIdx((timeData[0][1] - 9) * 2);
        });
    getData();
  }, []);

  const ExtendRoom = () => {
    axios
      .put(
        `${URL}/api/order/extend/${orderId}`,
        { date: date, startTime: time[0], endTime: extendedTime, bookingCapacity: bookingCapacity },
        {
          headers: { Authorization: `Bearer ${JWT_TOKEN}` },
        }
      )
      .then((res) => {
        window.location.reload();
      });
  };
  const closeModal = () => {
    setOpenExtendModal(false);
  };

  //timeGrid
  const timeSlots = Array.from({ length: blockCount / 2 }, (_, i) => i + 9).map((e) => e + ':00');

  const handleBlockClick = (id) => {
    if (id < recentBlockIdx) {
      // console.log('시간 단축');
      setBlocks((prevState) => {
        // console.log(`id: ${id} recent id: ${recentBlockIdx} maxExtendEndIdx: ${maxExtendEndIdx}`);
        const newBlocks = prevState.map((block) => (block.id > id && block.id < maxExtendEndIdx ? { ...block, bgColor: 'primary' } : block));
        // console.log(newBlocks);
        return newBlocks;
      });
    } else {
      setBlocks((prevState) => {
        const newBlocks = prevState.map((block) => (block.id <= id && block.id >= extendStartIdx ? { ...block, bgColor: 'sub' } : block));

        return newBlocks;
      });
    }
    setExtendedTime(id / 2 + 9.5);
    setRecentBlockIdx(id);
  };

  const findEarliestStartTime = (timeData, reservedTime) => {
    if (timeData.length === 0) {
      return false;
    } else {
      for (let i = 0; i < timeData.length; i++) {
        if (reservedTime[1] <= timeData[i][0]) {
          const earliestIdx = (timeData[i][0] - 9) * 2;
          const extendTime = earliestIdx - reservedTime[1] > 2 ? reservedTime[1] + 2 : earliestIdx;
          setMaxExtendEndIdx(extendTime);
          // console.log(timeData[i][0]);
          return timeData[i][0];
        }
      }
      const endIdx = (reservedTime[1] - 9) * 2;
      const maxTime = endIdx + 4 > 29 ? 29 : endIdx + 4;
      setMaxExtendEndIdx(maxTime);
      return 24.0;
    }
  };

  const timeBlock = useCallback(
    (timeData, reservedTime) => {
      let blocks = [];
      let timeArr = new Array(20);

      const checkReserved = (time) => {
        let newTime = time / 2 + 9;
        if (reservedTime[0] <= newTime && reservedTime[1] > newTime) return true;
        else return false;
      };

      for (let i = 0; i < blockCount; i++) {
        if (checkReserved(i)) {
          timeArr[i] = {
            isReserved: true,
            color: 'accent',
          };
        } else {
          timeArr[i] = {
            isReserved: false,
            color: 'gray-600',
          };
        }
      }

      let earliestStartTime = findEarliestStartTime(timeData, reservedTime);
      let maxExtendTime = 0;
      for (let i = 0; i < blockCount; i++) {
        let curTime = i / 2 + 9;

        if (!timeArr[i].isReserved && reservedTime[1] <= curTime && curTime < earliestStartTime && maxExtendTime < 4) {
          maxExtendTime += 1;
          blocks.push({ id: i, bgColor: 'primary' });
        } else if (timeArr[i].isReserved) {
          blocks.push({ id: i, bgColor: 'emphasize' });
        } else {
          blocks.push({ id: i, bgColor: 'gray-600' });
        }
      }
      return blocks;
    },
    [timeData, time]
  );

  const timeFormatting = (time) => {
    return Number.isInteger(time) ? time.toString() + ':00' : time.toString().split('.')[0] + ':30';
  };

  return (
    <>
      <div className='h-screen w-screen bg-black/40 absolute top-0 left-0'>
        <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] '>
          <div className='bg-white w-[1100px] rounded-xl'>
            <div className='p-6 text-center'>
              <h3 className='mb-5 text-2xl  text-black'>이용시간 연장하기</h3>
              <div className='text-lg'>현재 예약 시간: {`${timeFormatting(time[0])} ~ ${timeFormatting(time[1])}`}</div>
              <div className='text-lg'>연장 후 시간: {`${timeFormatting(time[0])} ~ ${timeFormatting(extendedTime)}`}</div>
              <div className='py-6'>
                <div className='grid grid-cols-30 gap-0'>
                  {timeSlots.map((time) => (
                    <div key={time} className='col-span-2 text-left text-base'>
                      {time}
                    </div>
                  ))}
                  {/* {timeBlock(timeData, time)} */}
                  {blocks.map(({ id, bgColor }) => (
                    <ReservationBlock key={id} id={id} bgColor={bgColor} handleBlockClick={handleBlockClick} />
                  ))}
                </div>
                <div className='flex justify-start mt-2'>
                  <div className='flex items-center pr-5'>
                    <div className='w-10 h-7 bg-emphasize' />
                    <span className='pl-2 text-lg'>: 내가 예약한 시간</span>
                  </div>
                  <div className='flex items-center pr-5'>
                    <div className='w-10 h-7 bg-primary' />
                    <span className='pl-2 text-lg'>: 예약 연장가능</span>
                  </div>
                  <div className='flex items-center pr-5'>
                    <div className='w-10 h-7 bg-gray-600 ' />
                    <span className='pl-2 text-lg'>: 예약 연장 불가능</span>
                  </div>
                </div>
              </div>
              <div className='flex justify-end'>
                <button type='button' className='text-white bg-primary rounded-lg text-lg items-center h-10 px-5 py-2 text-center mr-2' onClick={ExtendRoom}>
                  연장하기
                </button>
                <button type='button' className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-lg h-10 px-5 py-2 hover:text-gray-900 focus:z-10 ' onClick={closeModal}>
                  취소하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomExtendModal;
