import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const INPUT_STYLE = 'p-2 text-base leading-4 border-[1px] border-sub rounded  placeholder:text-gray-300';
  const [id, setId] = useState();
  const [pw, setPw] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const getJWT = async () => {
      await axios
        .post('https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app/api/auth/login', {
          username: id,
          password: pw,
        })
        .then((res) => {
          localStorage.setItem('JWT', res.data.jwtToken);
          window.location.reload();
        })
        .catch((error) => {
          alert(error.response.data);
        });
    };
    getJWT();
  };

  if (localStorage.getItem('JWT') === null) {
    return (
      <div className='flex justify-center items-center w-full '>
        <div className='flex flex-col items-center justify-center gap-8 border-sub border rounded-xl min-w-96 p-6 mt-40 shadow-lg'>
          <h1 className='text-2xl text-primary'>로그인</h1>
          <form onSubmit={handleSubmit}>
            <div className='flex items-center gap-2'>
              <div className='flex flex-col justify-between items-center gap-4'>
                <input className={INPUT_STYLE} onChange={(e) => setId(e.target.value)} type='text' placeholder='아이디 입력' />
                <input className={INPUT_STYLE} onChange={(e) => setPw(e.target.value)} type='text' placeholder='패스워드 입력' />
              </div>
              <button type='submit' className='w-full h-24 text-xl bg-primary text-white p-4 rounded-lg hover:bg-emphasize'>
                로그인
              </button>
            </div>
            <div className='text-right  p-2'>
              <h1 className='text-sm text-gray-500'>
                아직 회원이 아니신가요?{' '}
                <span className='text-primary hover:cursor-pointer'>
                  <Link to='/register'>회원가입</Link>
                </span>
              </h1>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <Navigate to='/'></Navigate>;
  }
}

export default Login;
