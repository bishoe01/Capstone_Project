import React from 'react';
import { Process } from '../components/styled/process';
import '../App.css';
import StepBar from '../components/StepBar';
function Home(props) {
    return (
        <>
        <div className='flex flex-col justify-center items-center'>
        <StepBar/>
        <h1 className='text-3xl text-primary tracking-widest'>"어떤 유형을 선택하시겠어요?</h1>
        </div>
        
        <section className='bg-gray-500 grid grid-cols-2 w-full h-full p-12'>
            <div className='w-full flex flex-col items-center justify-center'>
                <h1 className='text-center whitespace-pre-wrap'>Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit. Delectus, autem.</h1>
                <button className='bg-primary text-white w-1/3'>스터디룸</button>
            </div>
            <div className='w-full bg-green-200'>
                <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, autem.</h1>
            </div>
        </section>
        </>
    );
}

export default Home;