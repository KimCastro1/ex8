import React, { Component } from 'react'

export default class MainVedeoComponent extends Component {
  render() {
    return (
      <>
      <div className='main_video'>
        <div className='main_video_wrraper'>
              <iframe  id="my_iframe" width="1080" height="500" src="https://www.youtube.com/embed/cGNUpsevAk4" frameBorder="0"></iframe>
            <div className='main_video_info'> 
                더 베스트 슬렘덩크
              <div className='viedeo_info'> 
                  전국 제패를 꿈꾸는 북산고 5인방의 꿈과 열정
              </div>
              <div className='viedeo_info'> 
                  멈추지 않는 도전을 그린 영화
              </div>  
            </div>
        </div>
      </div>
      
      </>
      
    )
  }
}
