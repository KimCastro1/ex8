import React from 'react'
import ReviewItemComponent from './ReviewItemComponent'
export default function MovieReviewComponent() {
  return (
    <>
        <div className='movie_review'>
            <div className='review_head'>
                <b>24,164</b> 명의 관람객이 평가해주셨습니다.
                <button className='review_btn'>평점작성</button>
            </div>
            <div className="review_main">
                <ReviewItemComponent/>
                <ReviewItemComponent/>
                <ReviewItemComponent/>
                <ReviewItemComponent/>
                <ReviewItemComponent/>
                <ReviewItemComponent/>
                <ReviewItemComponent/>
                <ReviewItemComponent/>
            </div>
            <div className='review_paging'>
                <ul>
                    <li style={{color:'#999'}}>이전</li>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>다음</li>
                    
                </ul>
            </div>
        </div>

    </>    
    )
}   


