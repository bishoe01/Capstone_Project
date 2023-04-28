import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

function Register() {
  const INPUT_STYLE = 'p-2 text-base leading-4 border-[1px] border-sub rounded placeholder:text-gray-500 placeholder:text-sm';
  const WARNING_STYLE = 'text-warning text-sm pt-1 pl-0.5';
  // const [id, setId] = useState();
  // const [pw, setPw] = useState('');
  // const [pwcheck, setPwcheck] = useState('');
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ mode: 'onChange' });

  const onSubmit = (data) => {
    // e.preventDefault();
    const register = async () => {
      await axios
        .post('https://port-0-erica-studyroom-6g2llfs1h510.sel3.cloudtype.app/api/auth/signUp', {
          username: data.username,
          password: data.password,
          name: data.name,
          studentNumber: data.studentnumber,
          imgUrl: '/user_profile_img/test12.png',
          age: data.age,
          grade: data.grade,
          email: data.email,
          university: data.university,
          department: data.department,
        })
        .then((res) => {
          navigate('register/registered');
        })
        .catch((error) => {
          alert(error.response.data);
        });
    };
    register();
  };

  const onError = (error) => {
    // console.log(error);
    console.log('error username: ' + error);
  };

  const pw = watch('password');

  const checkPassword = (pwcheck) => {
    if (pwcheck !== pw) {
      return '비밀번호가 일치하지 않습니다';
    }
    return true;
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className='flex justify-center items-center w-full'>
      <div className='flex flex-col items-center justify-center gap-8 border-sub border rounded-xl  min-w-96 p-6 mt-40 shadow-lg'>
        <h1 className='text-2xl text-primary'>회원가입</h1>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          <div className='flex flex-col items-center gap-4'>
            <div className='w-full'>
              <h3>아이디</h3>
              <input className={`${INPUT_STYLE} w-full`} type='text' name='username' placeholder='4~12글자의 영문과 숫자' {...register('username', { required: true, minLength: 4 })} />
              {errors.username && errors.username.type === 'required' && <h3 className={WARNING_STYLE}>아이디를 입력해주세요</h3>}
              {errors.usename && errors.username.minLength < 4 && <h3 className={WARNING_STYLE}>아이디는 4~12글자의 영문과 숫자로 입력해주세요</h3>}
            </div>
            <div className='w-full'>
              <h3>비밀번호</h3>
              <input
                className={`${INPUT_STYLE} w-full`}
                type='password'
                name='password'
                placeholder='영문, 숫자, 특수문자 중 2가지 이상 조합한 6~12자리 비밀번호'
                autoComplete='off'
                {...register('password', {
                  required: true,
                  pattern: {
                    value: /^(?!((?:[A-Za-z]+)|(?:[~!@#$%^&*()_+=]+)|(?:[0-9]+))$)[A-Za-z\d~!@#$%^&*()_+=]{6,12}$/,
                    message: '영문, 숫자, 특수문자 중 2가지 이상 조합하여 6~12자리로 입력해주세요.',
                  },
                })}
              />
              {errors.password && errors.password.type === 'required' && <h3 className={WARNING_STYLE}>비밀번호를 입력해주세요</h3>}
              {errors.password && <h3 className={WARNING_STYLE}>{errors.password?.message}</h3>}
            </div>
            <div className='w-full'>
              <h3>비밀번호 재입력</h3>
              <input
                className={`${INPUT_STYLE} w-full`}
                type='password'
                name='passwordCheck'
                placeholder='비밀번호 재입력'
                autoComplete='off'
                {...register('passwordCheck', {
                  required: true,
                  validate: checkPassword,
                })}
              />
              {errors.passwordCheck && errors.passwordCheck.type === 'required' && <h3 className={WARNING_STYLE}>비밀번호를 재입력해주세요</h3>}
              {errors?.passwordCheck?.message && <h3 className={WARNING_STYLE}>{errors?.passwordCheck?.message}</h3>}
            </div>
            <div className='w-full'>
              <h3>이름</h3>
              <input
                className={`${INPUT_STYLE} w-full`}
                type='text'
                name='name'
                placeholder='한국어 또는 영어'
                {...register('name', {
                  required: true,
                })}
              />
              {errors.name && errors.name.type === 'required' && <h3 className={WARNING_STYLE}>이름을 입력해주세요</h3>}
            </div>
            <div className='flex gap-2'>
              <div className=''>
                <h3>학번</h3>
                <input
                  className={INPUT_STYLE}
                  type='text'
                  name='studentnumber'
                  placeholder='학번을 입력해주세요'
                  {...register('studentnumber', {
                    required: true,
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: '올바른 학번 10자리를 입력해주세요.',
                    },
                  })}
                />
                {errors.studentnumber && errors.studentnumber.type === 'required' && <h3 className={WARNING_STYLE}>학번을 입력해주세요</h3>}
                {errors.studentnumber && <h3 className={WARNING_STYLE}>{errors.grade?.message}</h3>}
              </div>
              <div className=''>
                <h3>나이</h3>
                <input
                  className={INPUT_STYLE}
                  type='text'
                  name='age'
                  placeholder='나이를 입력해주세요'
                  {...register('age', {
                    required: true,
                    pattern: {
                      value: /^[1-9][0-9]$/,
                      message: '올바른 나이를 입력해주세요.',
                    },
                  })}
                />
                {errors.age && errors.age.type === 'required' && <h3 className={WARNING_STYLE}>나이를 입력해주세요</h3>}
                {errors.age && <h3 className={WARNING_STYLE}>{errors.grade?.message}</h3>}
              </div>
            </div>
            <div className='flex gap-2'>
              <div className=''>
                <h3>학년</h3>
                <input
                  className={INPUT_STYLE}
                  type='text'
                  name='grade'
                  placeholder='학년을 입력해주세요'
                  {...register('grade', {
                    required: true,
                    pattern: {
                      value: /^[1-4]{1}$/,
                      message: '올바른 학년을 입력해주세요(1~4).',
                    },
                  })}
                />
                {errors.grade && errors.grade.type === 'required' && <h3 className={WARNING_STYLE}>학년을 입력해주세요</h3>}
                {errors.grade && <h3 className={WARNING_STYLE}>{errors.grade?.message}</h3>}
              </div>
              <div className=''>
                <h3>이메일</h3>
                <input
                  className={INPUT_STYLE}
                  type='text'
                  placeholder='이메일을 입력해주세요'
                  {...register('email', {
                    required: true,
                    pattern: {
                      value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                      message: '이메일 형식에 맞지 않습니다.',
                    },
                  })}
                />
                {errors.email && errors.email.type === 'required' && <h3 className={WARNING_STYLE}>이메일을 입력해주세요</h3>}
                {errors.email && <h3 className={WARNING_STYLE}>{errors.email?.message}</h3>}
              </div>
            </div>
            <div className='flex gap-2'>
              <div className=''>
                <h3>단과대학</h3>
                <input
                  className={INPUT_STYLE}
                  type='text'
                  placeholder='한글로 작성해주세요'
                  {...register('university', {
                    required: true,
                  })}
                />
                {errors.university && errors.university.type === 'required' && <h3 className={WARNING_STYLE}>단과대학을 입력해주세요</h3>}
              </div>
              <div className=''>
                <h3>학과</h3>
                <input
                  className={INPUT_STYLE}
                  type='text'
                  placeholder='한글로 작성해주세요'
                  {...register('department', {
                    required: true,
                  })}
                />
                {errors.department && errors.department.type === 'required' && <h3 className={WARNING_STYLE}>학과를 입력해주세요</h3>}
              </div>
            </div>
            <div className='flex items-center w-full gap-2'>
              <button type='button' className='w-full h-16 text-xl bg-gray-600 text-white p-4 rounded-lg hover:bg-gray-400' onClick={handleGoHome}>
                처음으로
              </button>
              <button type='submit' className='w-full h-16 text-xl bg-primary text-white p-4 rounded-lg hover:bg-emphasize'>
                회원가입
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
