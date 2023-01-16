import React from 'react';
import { Process } from '../components/styled/process';
import '../App.css';
import StepBar from '../components/StepBar';
import Slide from 'react-reveal/Slide';
function Home(props) {
    const SECTION_STYLE = 'w-full bg-gradient-to-r from-primary to-black text-center text-white p-16 rounded-xl hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-emphasize cursor-pointer'
    return (
        <>
            <div className='flex flex-col justify-center items-center'>
                <StepBar step={0} />
                <h1 className='text-2xl text-primary tracking-widest'>"어떤 유형을 선택하시겠어요?</h1>
            </div>

            <section className='mt-10 flex flex-col w-full py-12 gap-10'>
                <Slide left>
                <div className={SECTION_STYLE}>
                    <h1 className='text-3xl'>
                        스터디/멘토링 등 소규모 모임</h1>
                </div>
                </Slide>
                
                <Slide right>
                <div className={SECTION_STYLE}>
                    <h1 className='text-3xl'>
                        스터디/멘토링 등 소규모 모임</h1>
                </div>
                </Slide>
            </section>
        </>
    );
}

export default Home;