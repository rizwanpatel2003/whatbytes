"use client"

import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Scorecontext from '../../Context/Scorecontext';
import { useContext } from 'react';
// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const ScoreChart = () => {
  const contextvalue=useContext(Scorecontext)
  const {crct}= contextvalue[2];
  const data = {
    labels: ['Correct', 'Incorrect'],
    datasets: [
      {
        label: 'Score',
        data: [crct,15-crct], // 12 correct, 3 incorrect
        backgroundColor: ['#36A2EB', '#FF6384'], // Blue for correct, Red for incorrect
        hoverBackgroundColor: ['#36A2EB', '#FF6384'],
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Question Analysis',
      },
    },
  };

  return (
    <div className='w-[200px] h-[200px] md:w-[300px] md:h-[300px]'  >
     
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ScoreChart;