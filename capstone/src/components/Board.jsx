import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../styles';
function Board({ nowData, department }) {
    const [info, setInfo] = useState({});
    useEffect(() => {
        axios.get(`/data/departmentinfo.json`)
            .then((res) => {
                setInfo(res.data[department]);
            })
            .then(() => {
                console.log(info);
            })
    }, [])
    return (
        <div className={`${styles.innerWidth} mx-auto`}>
            <h2 className='w-full text-primary border-l-4 px-2 border-sub text-2xl'>{info?.name}</h2>
            <p className={`flex flex-col text-primary text-lg gap-8 ${styles.bottomPaddings}`}>
                <li>위치 : {info?.location}</li>
                <li>인원 : 2~6인 ( 각 실별 수용인원 참고 )</li>
                <li>예약가능일자 : {info?.caution}</li>
                {/* <li className='flex gap-2'>주의사항 : {nowData && nowData.cautions.map((caution, index) => {
                    return <span key={index}>{caution}</span>
                })}</li> */}
                <li className='flex gap-4'>
                    문의:
                    <a href="#soso" className='underline hover:text-sky-400'>카카오톡 오픈채팅방</a>
                    <a href="#wowo" className='underline hover:text-sky-400'>공식 인스타그램</a>
                </li>
            </p>
        </div>
    );
}

export default Board;