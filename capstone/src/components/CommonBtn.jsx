import React, { useEffect } from 'react';

function CommonBtn({ height, width, color, bgColor, text, onClick, disabled = false }) {
  return (
    <button className={`w-[200px] p-2 text-${color} text-2xl text-center bg-${bgColor} rounded-full p-1 mx-2 tracking-widest`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default React.memo(CommonBtn);
