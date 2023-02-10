import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import {CategoryScale} from 'chart.js'; 
import {LinearScale} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale);
ChartJS.register(ArcElement, Tooltip, Legend);
const MovieChart1Component = (props) => {
    const sum=props.a+props.b;
    let x = Math.round((props.a/sum)*100);
    let y = 100-x;

    const expData={
        labels: ["여", "남"],
        datasets: [
            {
      labels: ["여:"+x+"%", "남"+y+"%"],
      data: [y, x,],
      borderWidth: 2,
      hoverBorderWidth: 3,
      backgroundColor: [
        "rgba(255, 0, 0, 0.4)",
        "rgba(160, 160, 160, 1)"
      ],
        }
      ]
    }

  return (
    <Doughnut
        options={{
            legend: {
            display: true,
            responsive: false,
            },
            
        }}
        data={expData}
    />
  )
}

export default MovieChart1Component;