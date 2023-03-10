import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Board({ nowData, department }) {
    const [info, setInfo] = useState({});
    useEffect(() => {
        axios.get(`/data/departmentinfo.json`)
            .then((res) => {
                setInfo(res.data[department]);
            })
    }, [])
    return (
        <div>
            <h2 className='w-full text-primary border-l-4 px-2 border-sub text-2xl'>{info.name}</h2>
            <p className='flex flex-col p-4 text-gray-800 text-lg gap-4'>
                <li>위치 : {info.location}</li>
                <li>인원 : 2~6인 ( 각 실별 수용인원 참고 )</li>
                <li>예약가능일자 : {info.caution}</li>
                {/* <li className='flex gap-2'>주의사항 : {nowData && nowData.cautions.map((caution, index) => {
                    return <span key={index}>{caution}</span>
                })}</li> */}
                <li className='flex gap-4'>
                    문의:
                    <a href="" className='underline'>카카오톡 오픈채팅방</a>
                    <a href="" className='underline'>공식계정 인스타그램 메세지</a>
                </li>
            </p>
        </div>
    );
}

export default Board;