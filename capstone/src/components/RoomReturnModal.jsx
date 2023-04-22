import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function RoomReturnModal({ setOpenReturnModal, orderId, studyRoomId, studyRoomName, state, building, location, name, date, startTime, endTime, bookingCapacity, JWT_TOKEN }) {
  const ReturnRoom = () => {
    const URL = 'https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app';
    axios
      .put(
        `${URL}/api/order/return/${orderId}`,
        {
          orderId: orderId,
          studyRoomId: studyRoomId,
          studyRoomName: studyRoomName,
          state: state,
          building: building,
          location: location,
          name: name,
          date: date,
          startTime: startTime,
          endTime: endTime,
          bookingCapacity: bookingCapacity,
        },
        {
          headers: { Authorization: `Bearer ${JWT_TOKEN}` },
        }
      )
      .then((res) => {
        window.location.reload();
      });
  };
  const closeModal = () => {
    setOpenReturnModal(false);
  };

  return (
    <>
      <div className='h-screen w-screen bg-black/40 absolute top-0 left-0'>
        <div className='w-96 h-96 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-30%] '>
          <div className='bg-white w-96 rounded-xl'>
            <div className='p-6 text-center'>
              <h3 className='mb-5 text-xl  text-gray-800'>팀플실을 반납 하시겠습니까?</h3>
              <button type='button' className='text-white bg-primary rounded-lg text-lg items-center px-5 py-1 text-center mr-2' onClick={ReturnRoom}>
                반납하기
              </button>
              <button type='button' className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-lg px-5 py-1 hover:text-gray-900 focus:z-10 ' onClick={closeModal}>
                취소하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomReturnModal;
