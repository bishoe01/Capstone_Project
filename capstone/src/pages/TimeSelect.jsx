import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import StepBar from '../components/StepBar';
import Fade from 'react-reveal/Fade';
import { useRoomContext } from '../context/Roomdata';
import { useNavigate } from 'react-router-dom';
import TimeLine from '../components/TimeTable/TimeLine';

function TimeSelect(props) {
    const location = useLocation();
    const [time, setTime] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);
    const { roomData, selectData, setSelectData } = useRoomContext();
    const [deparment, setDepartment] = useState(roomData[location.pathname.split('/')[2]]);
    const [onSection, setOnSection] = useState(Array.from({ length: deparment.length }, () => false));
    const [y, m, d] = new Date().toLocaleDateString().split('.');
    const today = m.concat('월 ', d, '일');
    const navigate = useNavigate();
    const [tmpData, setTmpData] = useState({
        "room": '', "date": '', "start": '', "end": '', "people": '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        setSelectData([{ ...selectData }, { ...tmpData }]);
        console.log(tmpData);
        navigate('/about');
    };
    console.log(deparment);
    return (
        <Fade>
            <div className='flex flex-col p-4 my-12'>
                <h2 className='w-full text-primary border-l-4 px-2 border-sub'>경상대학</h2>
                <p className='flex flex-col p-4 text-gray-500'>
                    <li>위치 : 경상대학 도서실 도담 앞</li>
                    <li>인원 : 2~6</li>
                    <li>특징 : 콘센트 멀티탭 구비</li>
                    <li>주의사항 : 마실 것을 제외한 음식 취식 불가능</li>
                </p>
            </div>
            <section className='flex flex-col'>
            <div className='flex w-full items-center gap-4 border-b-[1px] border-sub p-3'>
                <div className='flex basis-3/12 text-center px-2'>
                    <h2 className='px-4'>이름</h2>
                    <h2 className='px-4'>층</h2>
                    <h2 className='px-4'>수용인원</h2>
                    </div>
                    <h2 className='basis-8/12 text-center'>예약현황</h2>
                    <h2>예약</h2>
                </div>
                <TimeLine/>
            </section>
        </Fade>
    );
}

export default TimeSelect;