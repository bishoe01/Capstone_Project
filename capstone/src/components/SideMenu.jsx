import React from 'react';

const SubMenu = (props) => {
  return (
    <>
      <div className='flex pl-3'>
        <img src='icons/circle.png' alt='list-type' className='h-3 w-3 mt-0.5' />
        <div className='pl-3'>
          <h3 className='text-primary text-lg '>{props.name}</h3>
          <ul className='pb-6'>
            {props.submenu.map((item, i) => (
              <li className='text-textgray text-lg tracking-wider' key={i}>
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
    <ul>
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
    <div className='w-52 min-w-[13rem]  min-h-[700px] border-y border-r border-primary rounded-r-lg'>
      <div className='flex flex-col justify-center items-center pt-10'>
        <img src={`/images/하냥이_소프트웨어융합대학.png`} alt='' className='border rounded-full w-32 h-32' />
        <span className='text-xl py-2'>김한양</span>
        <button className='bg-primary text-text text-base rounded-lg px-2 py-1 before:align-middle'>프로필 설정</button>
      </div>
      <div className='w-[120px] border-border border-t mx-auto my-4'></div>
      <SideMenuContent menuItem={MenuItem} />
    </div>
  );
}

export default SideMenu;
