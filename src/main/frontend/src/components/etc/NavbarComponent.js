import React, { Component } from 'react'
import {Link} from 'react-router-dom'
export default class NavbarComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen:false,
        }
    }

  render(){

    return (

      <div>        
        <div className='nav'>
          <div className='nav_menu'>
          <ul style={{height:`55px`}}onMouseEnter={() => this.setState({ isOpen: true })} onMouseLeave={() => this.setState({ isOpen: false })}>
              <Link to='/list'><li>영화</li></Link>
              <li>극장</li>
              <Link to='/reservation'><li style={{color:`red`}}>예매</li></Link>
              <li>스토어</li>
              <li>이벤트</li>
              <li>혜택</li>
                <div className={`${this.state.isOpen?"":"show"} wrrap`}>
                <div className='nav_dmenu'>
                  <div className='nav_dmenu_wrrap'>
                      <ul>
                        <Link to='/list'><li><b>영화</b></li></Link>
                        <Link to='/list'><li>무비차트</li></Link>
                        <li>아트하우스</li>
                        <li>스페셜</li>
                      </ul>
                      <ul>
                        <li><b>극장</b></li>
                        <li>전국 극장</li>
                        <li>특별관</li>
                      </ul>
                      <ul>
                        <Link to='/reservation'><li><b>예매</b></li></Link>
                        <Link to='/reservation'><li>빠른예매</li></Link>
                        <li>상영스케쥴</li>
                        <li>English Ticketing</li>
                        <li>English Schedule</li>
                      </ul>
                      <ul>
                        <li><b>스토어</b></li>
                        <li>패키지</li>
                        <li>기프트카드</li>
                        <li>콤보</li>
                        <li>팝콘</li>
                        <li>음료</li>
                        <li>스낵</li>
                        <li>플레이존</li>
                      </ul>
                      <ul>
                        <li><b>이벤트</b></li>
                        <li>SPECIAL</li>
                        <li>영화/예매</li>
                        <li>멤버십/CLUB</li>
                        <li>극장별</li>
                        <li>제휴할인</li>
                        <li>당첨자 발표</li>
                        <li>종료된 이벤트</li>
                      </ul>
                      <ul>
                        <li><b>혜택</b></li>
                        <li>할인정보</li>
                        <li>CLUB 서비스</li>
                        <li>VIP 라운지</li>
                        <li>기타</li>
                      </ul>
                  </div>
                </div>
                </div>
          </ul>
          <ul className='search_menu'>    
              <li></li>
              <li><svg xmlns="http://www.w3.org/2000/svg" width="50" height="26" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              </li>
          </ul>
          </div>
        </div>
      </div>
    )
  }
}
