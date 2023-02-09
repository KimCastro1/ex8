import React, { Component } from 'react'
import Logo from '../img/logo.png'
export default class HeaderComponent extends Component {

  render() {
    
    return (
    
        <>
        <div className='header'>
          <div className='header_contents'>
              <div className='contents'>
                <h1>
                  <img src={Logo} style={{width:'140px'}} alt="logoImg"></img>
                  <span>The Best Theater</span>
                </h1>
                <ul className='memberInfo_wrap'>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" fill="currentColor" class="bi bi-lock" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/>
                    </svg>
                  <span>로그인</span></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
                        <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
                      </svg>
                    <span>회원가입</span></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                      </svg>
                    <span>내 정보</span></li>
                  <li><svg xmlns="http://www.w3.org/2000/svg" width="60" height="30" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16">
                        <path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
                      </svg>
                    <span>고객센터</span></li>
                </ul>
              </div>
          </div>

        </div>
        
        <div className='nav'>
          <div className='nav_menu'>
          <ul>
              <li>영화</li>
              <li>극장</li>
              <li>예매</li>
              <li>스토어</li>
              <li>이벤트</li>
              <li>혜택</li>
                <div className='nav_dmenu'>
                  <div className='nav_dmenu_wrrap'>
                      <ul>
                        <li><b>영화</b></li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                      </ul>
                      <ul>
                        <li><b>극장</b></li>
                        <li>더미</li>
                        <li>더미</li>
                      </ul>
                      <ul>
                        <li><b>예매</b></li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                      </ul>
                      <ul>
                        <li><b>스토어</b></li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                      </ul>
                      <ul>
                        <li><b>이벤트</b></li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                      </ul>
                      <ul>
                        <li><b>혜택</b></li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                        <li>더미</li>
                      </ul>
                  </div>
                </div>
          </ul>
          <ul className='search_menu'>    
              <li></li>
              <li><svg xmlns="http://www.w3.org/2000/svg" width="50" height="26" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
              </li>
          </ul>
          </div>
        </div>
        </>
    )
  }
}
