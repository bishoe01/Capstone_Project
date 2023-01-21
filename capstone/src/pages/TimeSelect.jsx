import React from 'react';
import { useParams } from 'react-router-dom';
import StepBar from '../components/StepBar';
import Fade from 'react-reveal/Fade';
import TimeBtn from '../components/TimeBtn';
import TimeTable from '../components/TimeTable';
import { MdLocationOn } from 'react-icons/md';
import { MdOutlineEditCalendar } from 'react-icons/md';
function TimeSelect(props) {
    const { depart } = useParams();
    return (
        <Fade>
            <StepBar step={2} />
            <section className='flex relative'>
                <div className='basis-3/12 p-4 text-center border-r-[1px] border-sub'>
                    <img className='rounded-xl' src={`/images/room.jpg`} alt={depart} />
                    <p className='text-2xl text-primary mt-3'>팀플실 이미지</p>
                </div>
                <div className='flex basis-5/12 p-4'>
                    <TimeTable />
                </div>
                <div className='flex flex-col gap-6 p-4 absolute text-3xl -right-1/4 fixed w-2/6 h-auto rounded-lg border-primary border-2 shadow-md text-primary'>
                    <h1 className='flex items-center gap-4'><MdOutlineEditCalendar />예약 정보</h1>

                    <form className='flex flex-col gap-4'>
                        <label for="room" class="block text-2xl text-primary font-medium text-gray-900 dark:text-primary">팀플실 번호</label>
                        <select id="room" class="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>예약하실 팀플실을 선택하세요</option>
                            <option value="US">101호</option>
                            <option value="US">101호</option>
                            <option value="US">101호</option>
                            <option value="US">101호</option>
                        </select>

                    </form>
                </div>
            </section>
        </Fade>
    );
}

export default TimeSelect;