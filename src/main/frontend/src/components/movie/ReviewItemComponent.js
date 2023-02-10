import React, { Component } from 'react'

export default class ReviewItemComponent extends Component {
  render() {
    return (
      
        <div className='review_item'>
            <div className="review_item_header">
            </div>
            <div className="review_item_main">
                 <div style={{paddingLeft:'10px'}}>
                    abc@aaaaaa.com
                 </div>
                 <div style={{marginTop:'5px',paddingLeft:'10px'}}>
                     너무 재미있게 봤어요. <br/>
                     정말 최고입니다. 한번 더 보고 싶네요. <br/>
                 </div>
            </div>
            <div className="review_item_footer">
                <span>2023.02.23 17:54</span> 
            </div>
        </div>
    )
  }
}
