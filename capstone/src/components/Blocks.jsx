import React from 'react';

function MyReservationBlock({ i }) {
  return <div key={i} className={`col-span-1 bg-emphasize px-2 py-4 border`} />;
}

function ReservationExtendBlock({ i }) {
  return <div key={i} className={`col-span-1 bg-primary px-2 py-4 border`} onMouseEnter={() => console.log('예약 가능한 블럭입니다.')} />;
}

function NoReservationBlock({ i }) {
  return <div key={i} className={`col-span-1 bg-gray-600 px-2 py-4 border`} />;
}

function ReservationBlock({ id, bgColor, handleBlockClick }) {
  if (bgColor === 'primary') {
    return <div className={`col-span-1 bg-primary px-2 py-4 border`} id={id} onClick={() => handleBlockClick(id)} />;
  } else if (bgColor === 'sub') {
    return <div className={`col-span-1 bg-sub px-2 py-4 border`} id={id} onClick={() => handleBlockClick(id)} />;
  } else {
    return <div key={id} className={`col-span-1 bg-${bgColor} px-2 py-4 border`} id={id} />;
  }
}

export { MyReservationBlock, ReservationExtendBlock, NoReservationBlock, ReservationBlock };
