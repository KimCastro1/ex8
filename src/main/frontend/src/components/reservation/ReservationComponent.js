import React from 'react'
import { useParams } from 'react-router-dom';

const ReservationComponent = () =>{

    const { midx } = useParams();

return (

                <div>

                <div className='reservation'>
                    <div className='reservation_head'>
                    </div>
                    <div className='selecte_item_wrrap'>
                        <div className='select_item'>
                            <div className='select_title'>
                                영화
                            </div>
                        </div>
                        <div className='select_item'>
                        <div className='select_title'>
                                극장
                            </div>
                        </div>
                        <div className='select_item'>
                        <div className='select_title'>
                                날짜
                            </div>
                        </div>
                        <div className='select_item'>
                        <div className='select_title'>
                                시간
                            </div>
                        </div>
                    </div>
                </div>
                <div className="selected_item_bar_wrrap">
                    <div className='wwrapww'>
                        <div className="dis_f">
                            <div className='placehold' value="영화선택 >">영화선택 ></div>
                            <div className='placehold' value="극장선택">극장선택 ></div>
                            <div className='placehold' value="날짜/시간">날짜/시간 ></div>
                            <div className='placehold'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"/>
                                    <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )

}

export default ReservationComponent;