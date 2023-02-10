import React, { Component } from 'react'

export default class FooterComponent extends Component {
  render() {
    return (
    <>
        <div className='footer'>
          <ul className='footer_list'>
            <li>경북 영천시 살고 있는 공부중인 개발자입니다</li>
          </ul>
            
           <div className='footer-aticle'>
              <p>현재 사이트는 리액트 기반 프론트 엔드이며</p>
              <p>백엔드로는 스프링 부트 프레임 워크를 사용하였습니다.</p>
              <p>스프링 부트에서 JWT와 OAUTH2/ SPRING AUTH 를 사용한 로그인</p>
              <p>데이터베이스는 MariaDB를 사용하였고 JPA를 사용하였습니다.</p>
           </div>

        </div>
    </>
    )
  }
}
