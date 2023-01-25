import React, { useEffect,useState } from 'react';

function TimeInput({options, type, placeholder,selected , isStart ,selectData, setSelectData}) {
    return (
        <select onChange={(e) => {
            isStart ? 
            setSelectData({...selectData,start: e.target.value })
            : setSelectData({...selectData,end: e.target.value });
        }} id="room" className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-emphasize dark:placeholder-gray-400 dark:text-primary dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option defaultValue={"room"}>{selected ? selected + type :placeholder}</option>
            {options.map((option,index) => {
                return (
                    <option value={option} key={index}>{option}:00</option>
                );
            })}
        </select>

    );
}

export default TimeInput;