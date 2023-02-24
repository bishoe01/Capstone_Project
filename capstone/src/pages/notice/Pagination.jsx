import React, { useEffect, useState } from 'react';

const NOT_SELECTED = 'mx-1 flex h-5 w-5 items-center justify-center rounded-full bg-sub p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300';
const SELECTED = 'mx-1 flex h-5 w-5 items-center justify-center rounded-full bg-emphasize p-0 text-sm text-white shadow-md transition duration-150 ease-in-out';

function Pagination() {
  return (
    <ul className='flex'>
      {/* <li>
        <a
          className='mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300'
          href='#'
          aria-label='Previous'>
          <span className='material-icons text-sm'>keyboard_arrow_left</span>
        </a>
      </li> */}
      <li>
        <a className={SELECTED} href='#'></a>
      </li>
      <li>
        <a className={NOT_SELECTED} href='#'></a>
      </li>
      <li>
        <a className={NOT_SELECTED} href='#'></a>
      </li>
      <li>
        <a className={NOT_SELECTED} href='#'></a>
      </li>
      <li>
        <a className={NOT_SELECTED} href='#'></a>
      </li>
      {/* <li>
        <a
          className='mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300'
          href='#'
          aria-label='Next'>
          <span className='material-icons text-sm'>keyboard_arrow_right</span>
        </a>
      </li> */}
    </ul>
  );
}

export default Pagination;
