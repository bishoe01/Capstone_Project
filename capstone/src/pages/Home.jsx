import React from 'react';
import { Process } from '../components/styled/process';
import '../App.css';
import StepBar from '../components/StepBar';
import Slide from 'react-reveal/Slide';
import SectionCard from '../components/SectionCard';
function Home({props}) {
    return (
        <>
            {/* <div className='flex flex-col justify-center items-center'>
                <StepBar step={0} />
                <h1 className='text-2xl text-primary tracking-widest'>"어떤 유형을 선택하시겠어요?</h1>
            </div> */}

            <section className='mt-10 flex flex-col w-full py-12 gap-10'>
                <SectionCard text={'스터디/멘토링 등 소규모 모임'} direction='left'/>
                <SectionCard text={'개강총회, 학부행사 등 대규모 행사'} direction='right'/>
            </section>
        </>
    );
}

export default Home;