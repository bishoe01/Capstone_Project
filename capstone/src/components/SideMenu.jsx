import React from 'react';

const SubMenu = (props) => {
  return (
    <>
      <div className='flex pl-3'>
        <img src='../icons/circle.png' alt='list-type' className='h-3 w-3 mt-0.5' />
        <div className='pl-3'>
          <h3 className='text-primary text-base '>{props.name}</h3>
          <ul className='pb-6'>
            {props.submenu.map((item, i) => (
              <li className='text-textgray text-base tracking-wider' key={i}>
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
    name: '예약 관리',
    submenu: ['예약 현황', '예약 내역'],
  },
  {
    name: '공지사항',
    submenu: [],
  },
];

function SideMenu({ name }) {
  return (
    <div className='w-52 min-w-[13rem]  min-h-[500px] border-y border-r border-primary rounded-r-lg'>
      <div className='flex flex-col justify-center items-center pt-10'>
        <img src={`/images/하냥이_소프트웨어융합대학.png`} alt='' className='border rounded-full w-32 h-32' />
        <span className='text-lg py-2'>{name}</span>
        {/* <button className='bg-primary text-text text-base rounded-lg px-2 py-1 before:align-middle'>프로필 설정</button> */}
      </div>
      <div className='w-[120px] border-border border-t mx-auto mb-3'></div>
      <SideMenuContent menuItem={MenuItem} />
    </div>
  );
}

export default React.memo(SideMenu);
