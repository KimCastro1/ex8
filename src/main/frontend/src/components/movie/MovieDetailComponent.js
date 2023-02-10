import React from 'react'
import { useParams } from 'react-router-dom';

const MovieDetailComponent = () => {
    
    
    const { midx } = useParams();

    return (
      <div>{midx}번 영화</div>
    )
}


export default MovieDetailComponent;
