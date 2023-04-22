import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

function RoomCancelModal({ setOpenCancelModal, orderId, JWT_TOKEN }) {
  const ReturnRoom = () => {
    const URL = 'https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app';
    axios
      .delete(`${URL}/api/order/${orderId}`, {
        headers: { Authorization: `Bearer ${JWT_TOKEN}` },
      })
      .then((res) => {
        window.location.reload();
      });
  };
  const closeModal = () => {
    setOpenCancelModal(false);
  };

  useEffect(() => {
    console.log(JWT_TOKEN);
  });
  return (
    <>
      <div className='h-screen w-screen bg-black/40 absolute top-0 left-0'>
        <div className='w-96 h-96 fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-30%] '>
          <div className='bg-white w-full rounded-xl'>
            <div className='py-6 px-4 text-center'>
              <h3 className='mb-5 text-xl  text-gray-800'>해당 팀플실 예약을 취소 하시겠습니까?</h3>
              <button type='button' className='text-white bg-primary rounded-lg text-lg items-center px-4 py-2.5 text-center mr-2' onClick={ReturnRoom}>
                예약 취소하기
              </button>
              <button type='button' className='text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-lg px-5 py-2.5 hover:text-gray-900 focus:z-10 ' onClick={closeModal}>
                그만두기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomCancelModal;
