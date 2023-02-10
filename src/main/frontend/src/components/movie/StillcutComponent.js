import React,{useState} from 'react'
import TestImg from "../../img/testimg.jpg"
const StillCutComponent = ()=>{

    const [stilNo, setStilNo] = useState(1);
    const maxNo = 18;


    const prev=()=>{
        stilNo===1?setStilNo(maxNo):setStilNo(stilNo-1)
    }
    function next(){
        stilNo===maxNo?setStilNo(1):setStilNo(stilNo+1)
    }

    return(
        <>
        
        
        
        <div className="stillcut">
            <div className='stilcuthead'>
                스틸컷 &nbsp; {stilNo} <span style={{color:'#666'}}> /18건</span>
            </div>
            <div className='stilcut_wrrap'>

            </div>
            <div className='stillcut_main'>
                <img className="stillcut_img" src={TestImg} alt='img'></img>
                <div className='stillcut_btn_group'>
                <button onClick={prev}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
                <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
                </svg>
                </button>
                <button onClick={next}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
                </svg>
                </button>
            </div>
            </div>

        </div>


        </>
    );

}

export default StillCutComponent;