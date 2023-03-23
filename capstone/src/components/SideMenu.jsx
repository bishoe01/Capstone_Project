import React from 'react';
import Slide from 'react-reveal/Slide';

const SubMenu = (props) => {
  return (
    <>
      <div className='flex pl-3'>
        <img src='icons/circle.png' alt='' className='h-2.5 w-2.5 mt-0.5' />
        <div className='pl-3'>
          <h3 className='text-primary text-base '>{props.name}</h3>
          <ul className='pb-6'>
            {props.submenu.map((item, i) => (
              <li className='text-textgray text-sm tracking-wider' key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

const SideMenuContent = (props) => {
  return (
    <ul className=''>
      {props.menuItem.map((item, i) => (
        <li key={i}>
          <SubMenu name={item.name} submenu={item.submenu} />
        </li>
      ))}
    </ul>
  );
};

const MenuItem = [
  {
    name: '신청자 리스트 확인',
    submenu: ['신청자 리스트', '승인 및 거절'],
  },
  {
    name: '장소 대여',
    submenu: ['예약 내역', '취소 내역'],
  },
  {
    name: '공지사항',
    submenu: [],
  },
];

function SideMenu() {
  return (
    <div className='w-52 min-w-[13rem] h-[calc(100vh-36em)] min-h-[500px] border-y border-r border-primary rounded-r-lg'>
      <div className='flex flex-col justify-center items-center pt-10'>
        <img src={`/images/하냥이_소프트웨어융합대학.png`} className='border rounded-full w-24 h-24' />
        <span>김한양</span>
        <button className='bg-primary text-text text-sm rounded-lg px-2 py-1 before:align-middle'>프로필 설정</button>
      </div>
      <div className='w-[120px] border-border border-t mx-auto my-4'></div>
      <SideMenuContent menuItem={MenuItem} />
    </div>
  );
}

export default SideMenu;
