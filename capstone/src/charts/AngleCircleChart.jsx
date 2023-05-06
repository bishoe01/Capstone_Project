import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import ChartInfo from './ChartInfo';

function AngleCircleChart() {
  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        show: true,
        startAngle: 0,
        endAngle: 270,
        hollow: {
          margin: 0,
          size: '35%',
        },

        dataLabels: {
          name: {
            show: true,
            offsetY: -10,
            color: '#e3e3e3',
            fontSize: '12px',
          },
          value: {
            show: true,
            color: '#111',
            fontSize: '32px',
          },
          total: {
            show: true,
            label: 'Total',
            color: '#373d3f',
            formatter: function (w) {
              return w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0);
            },
          },
        },

        legend: {
          show: true,
          position: 'bottom',
          offsetY: 0,
          height: 230,
        },
      },
    },

    colors: ['#417FB3', '#5D8DFF', '#AEDBFF', '#D7EDFF'],
    labels: ['101호', '102호', '103호', '104호'],
    legend: {
      show: true,
      floating: true,
      fontSize: '14px',
      color: 'black',
      position: 'left',
      offsetX: 45,
      offsetY: 7,
    },
  };

  const series = [40, 25, 20, 15];
  const [chartData, setChartData] = useState(series);

  return (
    <div className='flex justify-between w-full'>
      {/* <ChartInfo graphName={'월별'} graphDescription={'언제 가장 많이 예약했을까요?'} /> */}
      <div className='w-full border-t-[3px] border-[#cdcdcd]'>
        <div className='chart'>
          <Chart options={options} series={chartData} type='radialBar' height='350' />
        </div>
      </div>
    </div>
  );
}

export default AngleCircleChart;
