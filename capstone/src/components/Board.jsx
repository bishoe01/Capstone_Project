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
                <li> <span className='font-bold'>인원</span> : 2~6인 ( 각 실별 수용인원 참고 )</li>
                <li> <span className='text-primary font-bold'>예약가능일자</span> : 당일로부터 6일뒤까지</li>
                {/* <li className='flex gap-2'>주의사항 : {nowData && nowData.cautions.map((caution, index) => {
                    return <span key={index}>{caution}</span>
                })}</li> */}
                <li className='flex gap-3'>
                    <span className='font-bold'>문의</span>:
                    <a href="https://open.kakao.com/o/si8s4Yjf" className='text-black hover:text-sky-400'>카카오톡 오픈채팅방</a>
                    <a href="" className='underline hover:text-sky-400'>공식 인스타그램</a>
                </li>
            </p>
        </div>
    );
}

export default Board;