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
            <StepBar step={2} />
            <section className='flex relative'>
                <TimeLine/>
            </section>
        </Fade>
    );
}

export default TimeSelect;