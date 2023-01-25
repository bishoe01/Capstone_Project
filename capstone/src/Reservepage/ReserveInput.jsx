import React, { useEffect,useState } from 'react';

function ReserveInput({options, type, placeholder,selected}) {
    return (
        <span id="room" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-emphasize dark:placeholder-gray-400 dark:text-primary dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {selected ? selected+type  : placeholder}
        </span>

    );
}

export default ReserveInput;