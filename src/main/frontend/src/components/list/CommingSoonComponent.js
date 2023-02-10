import React from 'react'
import CommingSoonItemComponent from './CommingSoonItemComponent'
import {Link} from 'react-router-dom'

function CommingSoonComponent() {
  return (
    <div className='container'>
    <div className='contents'>
      <div className='title-head'>
        <h1>상영예정작</h1>
        <div className='submenu'>
          <ul>
          <Link to = '/list'><li className='list_option'><b>▶ 무비차트</b></li></Link>
            <li className='selected_list_option'>▶ 상영예정작</li>
          </ul>
        </div>
      </div>
    </div>
    <div className='list_container'>
        <CommingSoonItemComponent/>
        <CommingSoonItemComponent/>
        <CommingSoonItemComponent/>
        <CommingSoonItemComponent/>
        <CommingSoonItemComponent/>
        <CommingSoonItemComponent/>
        <CommingSoonItemComponent/>
        <CommingSoonItemComponent/>
        <CommingSoonItemComponent/>
        <CommingSoonItemComponent/>
    </div>
  </div>
  )
}

export default CommingSoonComponent