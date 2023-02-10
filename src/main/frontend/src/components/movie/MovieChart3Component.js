import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';


ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
  );


const MovieChart3Component =(props)=>{

    const expData={

        labels: [
            '감독연출',
            '스토리',
            '영상미',
            '배우연기',
            'OST',
          ],
          datasets: [{
            data: [props.a, props.b, props.c, props.d, props.e],
            fill: true,
            backgroundColor: 'rgba(255, 0, 0, 0.4)',
            borderColor: 'rgba(255, 0, 0, 0.5)',
            pointBackgroundColor: 'rgba(255, 0, 0, 0.9)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)'
          }]

    }


    return(

            <>
                <Radar    
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
                    data={expData}/>
                    
            </>

    );

}

export default MovieChart3Component