import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TestImg from '../../img/testimg.jpg'

export default class MovieListItmeComponent extends Component {
  render() {
    return (
      <div className='list_item'>
        <div className='lankingBox'>
            No.1
        </div>
        <Link to='/movie/1'>
          <img src={TestImg} alt="movie_img_thumb"></img></Link>
        <div className='item_info'>
            <Link to='/movie/1'><span className='title'>더 퍼스트 슬램덩크</span></Link>
            <div className='info_1'>예매율 &nbsp; &nbsp; 16.7%</div>
            <div className='info_2'>2023.01.04 개봉</div>
        </div>
        <Link to='/reservation/1'><button className='reservation_button'> 예매하기 </button></Link>
      </div>
    )
  }
}
