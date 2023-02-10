import {React,useState} from 'react'
import img from '../../img/testimg.jpg'


const MainMoviewItemComponent=()=>{

    const [state, setState] = useState(true)

    const mouseIn = event => {
        setState(current => !current)
    }

    return(
            <>
                <div className='list_item_1'>
                    <div className='list_item_1_wrrap'>
                        <img className="list_item_1_src" src={img}></img>
                    </div>
                    <div className='list_item_1_wrrap_h' onMouseOver={mouseIn()}>
                        <i>&nbsp;1</i>
                    </div>
                    <div className='button_group' style={{display:state?'block':'none'}}>
                        <div className='custom_btn btn1'>
                            상세보기
                        </div>
                        <div className='custom_btn btn2'>
                            예매하기
                        </div>
                    </div>
                    <div className='title'>
                        더 퍼스트 슬램덩크
                    </div>
                    <div className='info'>예매율 &nbsp; 13.6%</div>
                </div>
            </>
        )

}

export default MainMoviewItemComponent