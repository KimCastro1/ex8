import React from 'react'
import { useParams } from 'react-router-dom';

const ReservationComponent = () =>{

    const { midx } = useParams();

return (
        <div> {midx}번 영화 예매하기 </div>
    )

}

export default ReservationComponent;