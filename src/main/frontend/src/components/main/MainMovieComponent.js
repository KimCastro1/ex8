import React from "react";
import MainMoviewItemComponent from './MainMoviewItemComponent'


const MainMovieComponent = () => {
    

    return (
      <>

        <div className="contents">
            <div className="main_list_selector">
              <ul>
                <li>
                  무비차트
                </li>
                <li>
                  상영예정작
                </li>
              </ul>
              <button className="allViewBtn">
                 전체보기 &nbsp;&nbsp; &#62;;
              </button>
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