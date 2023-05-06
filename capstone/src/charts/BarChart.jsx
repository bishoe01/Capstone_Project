import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import ChartInfo from './ChartInfo';

function Rank() {
  return (
    <div className='flex justify-center'>
      <div className='w-[157px]' />
      <div className='w-full h-[150px] bg-center bg-no-repeat bg-contain mt-8' style={{ backgroundImage: "url('/images/ranking.png')" }}></div>
    </div>
  );
}

function BarGraph() {
  const options = {
    chart: {
      stacked: true,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        horizontal: true,
        borderRadius: 15,
        dataLabels: {
          position: 'top',
        },
      },
    },
    // tooltip: {
    //   y: {
    //     formatter: function (val: any) {
    //       return 'Value: ' + val;
    //     },
    //   },
    //   marker: {
    //     show: false,
    //   },
    // },
    colors: ['#b3cfe9', '#b3cfe9', '#b3cfe9', '#e3e3e3', '#e3e3e3', '#e3e3e3', '#e3e3e3', '#e3e3e3', '#e3e3e3', '#e3e3e3', '#e3e3e3'],
    dataLabels: {
      enabled: true,
      style: {
        colors: ['#fff'],
      },
      offsetX: -10,
    },
    xaxis: {
      categories: ['학연산클러스터-큐브0', '학연산클러스터-큐브3', '뮤즈홀-개인연습실11', '언론정보관-IC-PBL Lab. 1', '4공학관0S-MaSH 3', '4공학관-SMaSH 2', '뮤즈홀-개인연습실14', '학연산클러스터-큐브2', '학연산클러스터-큐브1', '학연산클러스터-큐브4'],
      tickAmount: 10,
      axisBorder: {
        show: true,
        color: '#fff',
        height: 1,
        width: '100%',
        offsetX: 0,
        offsetY: 0,
      },
      axisTicks: {
        show: true,
        borderType: 'solid',
        color: '#e3e3e3',
        height: 425,
        offsetX: 0,
        offsetY: -425,
      },
    },
    grid: {
      show: false,
    },
    annotations: {
      yaxis: [
        {
          borderColor: '#fff',
          label: {
            borderColor: '#fff',
            style: {
              background: '#fff',
            },
            text: '단위: 번(횟수)',
          },
        },
      ],
    },

    fill: {
      opacity: 1,
    },
    legend: {
      show: false,
    },
  };

  const series = [
    {
      name: 'Value',
      data: [129, 86, 72, 46, 32, 21, 15, 11, 9, 6],
    },
  ];
  const [chartData, setChartData] = useState(series);

  return (
    <div className='flex justify-between w-full'>
      <ChartInfo chartName={'팀플실'} chartDescription={'어디가 인기가 많을까요?'} />
      <div className='w-full border-t-[3px] border-[#cdcdcd]'>
        <Rank />
        <div className='chart'>
          <Chart options={options} series={chartData} type='bar' height='500' />
        </div>
      </div>
    </div>
  );
}

export default BarGraph;
