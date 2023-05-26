import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

function AngleCircleChart({ data, colors }) {
  const [seriesData, setSeries] = useState([]);

  function refineData(input, key) {
    return input.reduce((result, item) => {
      const itemKey = item[key];
      if (!result[itemKey]) {
        result[itemKey] = 0;
      }
      result[itemKey]++;
      return result;
    }, {});
  }

  useEffect(() => {
    let refined = refineData(data, 'bookingCapacity');
    let resultChartData = new Array(3).fill(0);
    let percentage = new Array(3).fill(0);
    let total = 0;
    for (let key in refined) {
      const value = refined[key];
      const intKey = parseInt(key);
      if (intKey >= 4) {
        resultChartData[2] += value;
      } else {
        resultChartData[intKey - 2] += value;
      }
      total += value;
    }
    percentage = resultChartData.map((e) => (((e / total) * 100).toFixed(1) === 'NaN' ? 0 : ((e / total) * 100).toFixed(1)));
    const totalPercentage = percentage.reduce((acc, cur) => acc + parseFloat(cur), 0);

    if (totalPercentage !== 100) {
      percentage[percentage.length - 1] = (parseFloat(percentage[percentage.length - 1]) + (100 - totalPercentage)).toFixed(1);
    }
    setSeries(percentage);
  }, [data]);

  const options = {
    chart: {
      height: 350,
      type: 'radialBar',
      fontFamiliy: 'GmarketSansTTFMedium',
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
            color: '#000',
            fontSize: '12px',
          },
          value: {
            show: true,
            color: '#000',
            fontSize: '22px',
            offsetY: 7,
            formatter: function (val) {
              return val + '%';
            },
          },
          total: {
            show: true,
            label: 'Total',
            color: '#373d3f',
            fontSize: '22px',

            formatter: function (w) {
              return '100%';
            },
          },
        },
      },
    },
    yaxis: {
      showAlways: true,
    },

    colors: colors,
    labels: ['2인', '3인', '4인 이상'],
    legend: {
      show: true,
      floating: true,
      fontFamily: 'GmarketSansTTFMedium',
      fontSize: '12px',
      color: 'black',
      position: 'left',
      offsetX: 20,
      offsetY: 5,
    },
  };

  return (
    <div className='flex justify-between w-full'>
      {/* <ChartInfo graphName={'월별'} graphDescription={'언제 가장 많이 예약했을까요?'} /> */}
      <div className='w-full '>
        <div className='chart'>
          <Chart options={options} series={seriesData} type='radialBar' height='300' />
        </div>
      </div>
    </div>
  );
}

export default AngleCircleChart;
