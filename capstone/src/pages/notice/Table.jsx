import React from 'react';

const Data = [
  {
    number: 6,
    title: '경상대학 해오름식으로 인한 소음발생 안내',
    dept: '경상대학',
    op: '경상대학 학생회',
    date: '22-12-19',
  },
  {
    number: 5,
    title: '코로나 대응',
    dept: '경상대학',
    op: '경상대학 학생회',
    date: '22-12-19',
  },
  {
    number: 4,
    title: '강의실 대여',
    dept: '공대',
    op: '공대 학생회',
    date: '22-12-02',
  },
  {
    number: 3,
    title: '경상대학 해오름식으로 인한 소음발생 안내',
    dept: '경상대학',
    op: '경상대학 학생회',
    date: '22-11-28',
  },
  {
    number: 2,
    title: '강의실 대여',
    dept: '공대',
    op: '공대 행정팀',
    date: '22-11-15',
  },
  {
    number: 1,
    title: '장학',
    dept: '소융대',
    op: '소융대 행정팀',
    date: '22-11-01',
  },
];

function Post({ number, title, dept, op, date }) {
  return (
    <div className='flex items-center grid grid-cols-12 h-9 py-0.5 border-b border-border hover:bg-gray-200'>
      <span className='col-span-1 text-primary text-center py-0.5'>{number}</span>
      <span className='col-span-5 text-primary cursor-pointer py-0.5'>{title}</span>
      <span className='col-span-2 text-primary  py-0.5 '>{dept}</span>
      <span className='col-span-2 text-primary text-center py-0.5'>{op}</span>
      <span className='col-span-2 text-primary text-center py-0.5 '>{date}</span>
    </div>
  );
}

function Table() {
  return (
    <div className=''>
      <div className='grid grid-cols-12 border border-primary rounded-lg py-0.5'>
        <div className='col-span-1 text-center border-r'>번호</div>
        <div className='col-span-5 text-center border-r'>글 제목</div>
        <div className='col-span-2 text-center border-r'>대학명</div>
        <div className='col-span-2 text-center border-r'>작성자</div>
        <div className='col-span-2 text-center'>작성일자</div>
      </div>
      <div>
        {Data.map((data, i) => (
          <Post {...data} key={i} />
        ))}
      </div>
    </div>
  );
}

export default Table;
