import React, { Component } from 'react'
import MovieListItmeComponent from './MovieListItmeComponent'
import {Link} from 'react-router-dom'
export default class ListMovieComponent extends Component {
  render() {
    return (
        <div className='container'>
          <div className='contents'>
            <div className='title-head'>
              <h1>무비차트</h1>
              <div className='submenu'>
                <ul>
                  <li className='selected_list_option'><b>▶ 무비차트</b></li>
                  <Link to = '/commingsoon'><li className='list_option'>▶ 상영예정작</li></Link>
                </ul>
              </div>
            </div>
          </div>
          <div className='list_container'>
              <MovieListItmeComponent/>
              <MovieListItmeComponent/>
              <MovieListItmeComponent/>
              <MovieListItmeComponent/>
              <MovieListItmeComponent/>
              <MovieListItmeComponent/>
              <MovieListItmeComponent/>
              <MovieListItmeComponent/>
              <MovieListItmeComponent/>
              <MovieListItmeComponent/>
              <MovieListItmeComponent/>
              <MovieListItmeComponent/>
              <MovieListItmeComponent/>
              <MovieListItmeComponent/>
          </div>
        </div>
    )
  }
}
