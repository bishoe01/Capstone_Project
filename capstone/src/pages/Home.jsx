import React from 'react';
import '../App.css';
import styles from '../styles';
import ChartLayout from '../charts/ChartLayout';

function Home({ props }) {
  return (
    <section className={`${styles.innerWidth} mx-auto`}>
      <ChartLayout />
    </section>
  );
}

export default Home;
