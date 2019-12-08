import React from 'react';
import { Line } from 'react-chartjs-2';

const options = {
  legend: {
    display: false
  },
  layout: {
    padding: {
      top: 20,
      right: 20,
      left: 20,
      bottom: 20
    }
  }
};

const LineChart = ({ data }) => {
  const config = {
    labels: Object.keys(data)
      .reverse()
      .map(key => key),
    datasets: [
      {
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: Object.entries(data)
          .reverse()
          .map(([key, value]) => ({
            t: key,
            y: value.high
          }))
      }
    ]
  };
  return (
    <div>
      <Line data={config} options={options} />
    </div>
  );
};

export default LineChart;
