import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const MovieChart2Component = (props) => {
    const sum=props.a+props.b+props.c+props.d+props.e;
    let x = Math.round((props.a/sum)*100);
    let y = Math.round((props.b/sum)*100);
    let z = Math.round((props.c/sum)*100);
    let n = Math.round((props.d/sum)*100);
    let m = Math.round((props.e/sum)*100);

    const expData={
        labels: ["10대", "20대", "30대", "40대", "50대"],
        datasets: [
            {
      labels: ["10대", "20대", "30대", "40대", "50대"],
      data: [y, x, z, n, m],
      borderWidth: 2,
      hoverBorderWidth: 3,
      backgroundColor: [
        "rgba(160, 160, 160, 1)",
      ],
      fill: true
        }
      ]
    }

  return (
    <Bar id="chart1" height={'240px'}
        options={{
            plugins:{
                
                legend: 
                {
                    display: false,
                    responsive: false,
                }

            }
            , 
    }}
        data={expData}
    />
  )
}

export default MovieChart2Component;