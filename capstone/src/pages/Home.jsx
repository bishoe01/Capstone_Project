import React, { useState } from 'react';
import '../App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Radar from '../charts/Radar';
import Graph from '../charts/Graph';
import styles from '../styles';

function Home({ props }) {
  return (
    <section className={`${styles.innerWidth} mx-auto`}>
      {/* <div className='flex flex-col justify-center items-center'>
                <StepBar step={0} />
                <h1 className='text-2xl text-primary tracking-widest'>"어떤 유형을 선택하시겠어요?</h1>
            </div> */}
      {/* <Graph />
            <Radar /> */}
    </section>
  );
}

export default Home;
