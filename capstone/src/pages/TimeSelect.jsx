import React from 'react';
import { useParams } from 'react-router-dom';
import StepBar from '../components/StepBar';
import Fade from 'react-reveal/Fade';
function TimeSelect(props) {
    const { depart } = useParams();
    return (
        <Fade>
        <div className='flex'>
            <div className='basis-4/12 p-4 text-center border-r-2 border-sub'>
                <img className='rounded-xl' src={`/images/room.jpg`} alt={depart} />
                <p className='text-2xl text-textgray'>대표사진</p>
            </div>
            <div className='basis-6/12 p-4 '>
                <StepBar step={2} />


            </div>
        </div>
        </Fade>
    );
}

export default TimeSelect;