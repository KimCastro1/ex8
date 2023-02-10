import React from 'react'
import { useParams } from 'react-router-dom';
import testimg from '../../img/testimg.jpg'
import StillCutComponent from './StillcutComponent'
import MovieChart1Component from './MovieChart1Component'
import MovieChart2Component from './MovieChart2Component'
import MovieChart3Component from './MovieChart3Component'
import MovieReviewComponent from './MovieReviewComponent'
const MovieDetailComponent = () => {
    
    const { midx } = useParams();

    return (
      <div className='container'>
        <div className='contents1'>
          <div className='justify_s dis_f'>
              <div className='movie_img2'>
                <img src={testimg} alt='img'></img>
              </div>
            <div>
                <div className='movie_detail_info'>
                  <h1>더 퍼스트 슬램덩크</h1>
                  <span style={{color:'#666',fontSize:'17px'}}>The Firsh SlamDunk</span>
                  <p style={{color:'#666',fontSize:'14px', lineHeight:'45px'}}>예매율 &nbsp; 16.7% </p>
                </div>
                <div className='movie_detail_info2'>
                  <p>감독:<span>이노우에 타케히코</span></p>
                  <p>배우:<span>카미오 신이치로, 키무라 스바루, 미야케 켄타, 나카무라 슈고</span></p>
                  <p>장르:<span>모험/코미디</span></p>
                  <p>개봉:<span>2023.01.04</span></p>
                  <p>상영등급:<span>12세 관람가</span></p>
                </div>
            </div>
            </div>
            <div className='movie_info_btn_group'>
                <button>주요정보</button>
                <button>감독/출연</button>
                <button>스틸컷</button>
                <button>평점/리뷰</button>
                <button>상영시간표</button>
            </div>
            <div className='senario'>
            전국 제패를 꿈꾸는 북산고 농구부 5인방은 절대강자이자<br/>
            유력한 우승 후보 '산왕공고'를 32강 상대로 만나게 된다. <br/>
            모두가 언더독이라 생각하는 그들, <br/>
            채치수, 정대반, 송태섭, 서태웅, 강백호는 그들의 이야기와 함께 열정 가득한 경기에 나선다.<br/>
            </div>
            <div className='chart_wrrap'>
              <div className="chart-container1">예매 성별비율(%)<MovieChart1Component a={200} b={100}/></div>
              <div className="chart-container2">예매 연령분포(%)<MovieChart2Component a={81} b={236} c={370} d={260} e={93}/></div>
              <div className="chart-container1">관람평가<MovieChart3Component a={14} b={32} c={78} d={21} e={54}/></div>
            </div>         
            <StillCutComponent/>
            <MovieReviewComponent/>
        </div>
      </div>
    )
}


export default MovieDetailComponent;
