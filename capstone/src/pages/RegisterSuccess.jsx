import React, { useEffect, useState } from 'react';

function RegisterSuccess() {
  return (
    <div className='flex justify-center items-center w-full '>
      <div className='flex flex-col items-center justify-center gap-8 border-sub border rounded-xl min-w-96 p-6 mt-40 shadow-lg'>
        <h1 className='text-2xl text-primary'>회원가입 완료</h1>
        <div>로그인을 하시면 팀플실 예약이 가능합니다.</div>
      </div>
    </div>
  );
}

export default RegisterSuccess;
