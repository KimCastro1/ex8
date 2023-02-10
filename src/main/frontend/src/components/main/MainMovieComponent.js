import React,{useState} from "react";
import MainMoviewItemComponent from './MainMoviewItemComponent'
import {Link} from 'react-router-dom'


const MainMovieComponent = () => {
    
  const [state, setState] = useState(false)
  const isState=(e)=>{
    if(e.target.style.color===""){
      setState(!state);
    }
  }

    return (
      <>

        <div className="contents">
            <div className="main_list_selector">
              <ul>
                <li onClick={isState} style={{color:`${state?'':"#fb4357"}`}}>
                  무비차트
                </li>
                <li onClick={isState} style={{color:`${state?'#fb4357':''}`}}>
                  상영예정작
                </li>
              </ul>
              <Link to="/list"><button className="allViewBtn">
                 전체보기 &nbsp;&nbsp; &#62;
              </button></Link>
            </div>
        </div>
        <div className="list_container">
                <MainMoviewItemComponent/>
                <MainMoviewItemComponent/>
                <MainMoviewItemComponent/>
                <MainMoviewItemComponent/>
                <MainMoviewItemComponent/>
        </div>
      
      </>
      
    )
}


export default MainMovieComponent;