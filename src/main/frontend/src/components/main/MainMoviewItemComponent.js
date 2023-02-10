import {React,useState} from 'react'
import { Link } from 'react-router-dom'
import img from '../../img/testimg.jpg'


const MainMoviewItemComponent=()=>{

    const [state, setState] = useState(true)

    const mouseIn = () => {
        setState(current => !current)
    }

    return(
            <>
                <div className='list_item_1' onMouseOver={mouseIn} onMouseOut={mouseIn}>
                    <div className='list_item_1_wrrap'>
                        <img className="list_item_1_src" src={img}></img>
                    </div>
                    <div className={`${state?"show":""} button_group`}>
                        <Link to='/movie/1'><div className='custom_btn btn1'>
                            상세보기
                        </div></Link>
                        <Link to='/reservation/1'><div className='custom_btn btn2'>
                            예매하기
                        </div></Link>
                    </div>
                    <div className={`list_item_1_wrrap_h ${state?"":"hovering_ef"}`}>
                        <i>&nbsp;1</i>
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