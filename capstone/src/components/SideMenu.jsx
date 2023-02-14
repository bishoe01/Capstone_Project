import React from 'react';

const SubMenu = (props) => {
  return (
    <>
      <div className='flex pl-3'>
        <img src='icons/circle.png' alt='' className='h-2.5 w-2.5 mt-0.5' />
        <div className='pl-3'>
          <h3 className='text-primary text-sm'>{props.name}</h3>
          <ul className='pb-6'>
            {props.submenu.map((item) => (
              <li className='text-sub text-xs'>{item}</li>
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
      {props.menuItem.map((item, key) => (
        <li>
          <SubMenu name={item.name} submenu={item.submenu} />
        </li>
      ))}
    </ul>
  );
};

function SideMenu(props) {
  return (
    <div className='w-52 h-[calc(100vh-12em)] border-y border-r border-primary rounded-r-lg'>
      <div className='flex flex-col justify-center items-center pt-10'>
        <img src={`/images/하냥이_소프트웨어융합대학.png`} className='border rounded-full w-[78px] h-[78px]' />
        <span>Hanyang Kim</span>
        <button className='bg-primary text-text text-xs rounded-lg px-[6px] py-[2px]'>프로필 설정</button>
      </div>
      <div className='w-[120px] border-border border-t mx-auto my-5'></div>
      <SideMenuContent menuItem={props.menuItem} />
    </div>
  );
}

export default SideMenu;
