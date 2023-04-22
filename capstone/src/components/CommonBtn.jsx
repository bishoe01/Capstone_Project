import React, { useEffect } from 'react';

function CommonBtn({ height, width, color, bgColor, text, onClick, disabled = false }) {
  return (
    <button className={`w-${width} h-${height} text-${color} text-base text-center bg-${bgColor} rounded-md p-1 mx-2 tracking-widest`} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
}

export default React.memo(CommonBtn);
