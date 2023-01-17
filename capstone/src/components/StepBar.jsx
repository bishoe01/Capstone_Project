import React, { useState } from 'react';
import Layout from '../layout/Layout';

function StepBar({step}) {
    const [steps,setSteps] = useState({
        1: '유형선택',
        2: '스터디룸 선택',
        3: '예약 완료'
    });
    return (
        <Layout>
        <ul className='flex gap-6 px-4 py-2 w-1/3 text-primary justify-between'>
            {Object.keys(steps).map((key,index) => {
                return (
                    <li key={index} className='flex flex-col items-center'>
                        <div className={`w-8 h-8 rounded-full border-2 ${index === step ? 'border-emphasize' : 'border-sub'} flex justify-center items-center ${step > key ? 'bg-primary' : ''}`}>
                            <p className='text-xs'>{key}</p>
                        </div>
                        <p className={`text-s ${index === step ? 'text-emphasize' : 'text-primary'}`} >{steps[key]}</p>
                    </li>
                )
            })}
        </ul>
        </Layout>
    );
}

export default StepBar;