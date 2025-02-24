

"use client"

import React, { useContext } from 'react';
import Scorecontext from '../../Context/Scorecontext';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Comparision() {
  const contextvalue = useContext(Scorecontext);
  const { graph } = contextvalue[4];
  const { score } = contextvalue[0];

  // Calculate the percentile based on the score
  const calculatePercentile = (score, graph) => {
    const sortedGraph = [...graph].sort((a, b) => a - b);
    const index = sortedGraph.findIndex((val) => val >= score);
    const percentile = (index / sortedGraph.length) * 100;
    return percentile;
  };

  const percentile = calculatePercentile(score, graph);

  // Find the index in the graph data closest to the percentile
  const percentileIndex = Math.round((percentile / 100) * (graph.length - 1));

  // Generate labels [0, 10, 20, ..., 100]
  const labels = Array.from({ length: 11 }, (_, i) => i * 10);

  const data = {
    labels,
    datasets: [
      {
        label: "No Of Students",
        data: graph,
        borderColor: 'rgb(135,206,250)',
        backgroundColor: 'rgba(135,206,250, 0.5)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
    },
    scales: {
      x: {
        type: 'linear',
        ticks: {
          stepSize: 25,
          callback: (value) => {
            const labelsToShow = [0, 25, 50, 75, 100];
            return labelsToShow.includes(value) ? value : null;
          },
        },
        min: 0,
        max: 100,
      },
      y: {
        ticks: {
          display: false,
        },
      },
    },
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Render the chart */}
      <Line options={options} data={data} />

      {/* Render a straight vertical line and label at the percentile point */}
      <div className='h-[32%] md:h-[66%]'
        style={{
          position: 'absolute',
          left: `${Math.ceil(score / 10) * 68}px`, // Position based on score
          top: 0, // Start from the top of the chart
           // Span the entire height of the chart
          width: '2px', // Line thickness
          backgroundColor: 'gray', // Line color
          transform: 'translateX(-50%)',
           marginTop: "30px"
           // Center the line
        }}
      />
      <div className='text-[6px] md:text-[12px]'
        style={{
          position: 'absolute',
          left: `${Math.ceil(score / 10) * 65}px`, // Position based on score
          top: '50%', // Place the label in the middle vertically
          transform: 'translate(-50%, -50%)', // Center the label
          backgroundColor: 'black', // Label background color
          color: 'white', // Label text color
          padding: '4px 8px',
          borderRadius: '4px',
         
          fontWeight: 'bold',
        }}
      >
        You are here
      </div>
    </div>
  );
}