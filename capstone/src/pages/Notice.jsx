import React from 'react';
import Fade from 'react-reveal';
import Container from '../components/Container';
import SideMenu from '../components/SideMenu';
import Table from '../components/Table';
import Pagination from '../components/Pagination';

const BTN_STYLE = 'bg-sub text-text text-sm py-1 px-3 rounded-2xl';

const DEPT = ['전체', '경상관', '국문대', '공대', '소융대', '언정대', '과기대', '학정'];

function Notice() {
  return (
    <Fade>
      <Container>
        <div className='flex flex-col w-full min-w-[932px] px-12'>
          <h3 className='text-primary font-black text-lg'>공지사항</h3>
          <div className='flex flex-col items-center'>
            <div className=''>
              <input type='text' className='w-96 border border-border rounded py-2 px-4 focus:outline-none' />
            </div>
            <div className='grid grid-cols-8 gap-4 py-8'>
              {DEPT.map((name, i) => {
                return (
                  <button className={BTN_STYLE + ' '} key={i}>
                    {name}
                  </button>
                );
              })}
            </div>
          </div>
          <Table />
          <div className='flex justify-center pt-8'>
            <Pagination />
          </div>
        </div>
      </Container>
    </Fade>
  );
}

export default Notice;
