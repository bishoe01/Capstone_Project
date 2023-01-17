import React, { useState } from 'react';
import Layout from '../layout/Layout';

function StepBar({step}) {
    const [steps,setSteps] = useState({
        1: '유형 선택',
        2: '건물 선택',
        3: '스터디룸 선택',
        4: '예약 완료'
    });
    return (
        <Layout>
        <ul className='flex gap-6 px-4 py-2 text-primary justify-between'>
            {Object.keys(steps).map((key,index) => {
                return (
                    <li key={index} className='flex flex-col items-center'>
                        <div className={`w-8 h-8 rounded-full border-2 ${index === step ? 'border-emphasize' : 'border-sub'} flex justify-center items-center `}>
                            <p className='text-xs'>{key}</p>
                        </div>
                        <p className={`text-s flex shrink-0 ${index === step ? 'text-emphasize' : 'text-primary'}`} >{steps[key]}</p>
                    </li>
                )
            })}
        </ul>
        </Layout>
    );
}

export default StepBar;