import React from 'react';
import Layout from '../layout/Layout';

function StepBar(props) {
    return (
        <Layout>
        <ul className='flex gap-6 px-4 py-2 w-1/4 border-sub text-primary border-b-2 justify-between'>
            <li>유형선택</li>
            <li>스터디룸 선택</li>
            <li>예약 완료</li>
        </ul>
        </Layout>
    );
}

export default StepBar;