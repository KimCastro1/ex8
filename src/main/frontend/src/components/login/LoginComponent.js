import React,{useState} from 'react'
import Logo from '../../img/logo.png'
import GoogleLogo from '../../img/Google.png'
import KaKaoLogo from '../../img/Kakao.png'

export default function LoginComponent() {

    const [id, setId] = useState('')
    const [pw, setPw] = useState('')

    const inputId =(e)=>{
        setId(e.target.value);
    }
    const inputPw = (e)=>{
        setPw(e.target.value);
    }

return (
    <div className='content'>
        <div className='login_wrrap'>
            <div className='login'>
                <div className='login_content'>
                    <div>
                        <input type={'text'} placeholder='아이디' onChange={inputId}></input> 
                    </div>
                    <div>
                    <input type={'password'} placeholder='비밀번호' onChange={inputPw}></input>
                    </div>
                    <div>
                        <button className='login_btn'>로그인</button>
                    </div>
                    <div style={{justifyContent:'center'}}>
                        <div><img className="socialLogo" src={GoogleLogo} alt='img'></img></div>
                        <div><img className="socialLogo" src={KaKaoLogo} alt='img'></img></div>
                    </div>
                </div>
                <div className='logobox'>
                    <img src={Logo} alt='logo'></img>
                </div>
            </div>
        </div>
    </div>
  )
}
