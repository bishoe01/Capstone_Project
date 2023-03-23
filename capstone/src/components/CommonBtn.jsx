import React from 'react';

function CommonBtn({ height, width, color, bgColor, text, onClick }) {
  return (
    <button className={`w-${width} h-${height} text-${color} text-base text-center bg-${bgColor} rounded-md p-1 mx-2 tracking-widest`} onClick={onClick}>
      {text}
    </button>
  );
}

export default CommonBtn;
