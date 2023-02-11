import React,{useState} from 'react'
import Logo from '../../img/logo.png'
export default function JoinMemberComponent() {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [cpw, setCpw] = useState(true)

    const inputId =(e)=>{setId(e.target.value);}
    const inputPw = (e)=>{setPw(e.target.value);}
    const checkpw = (e)=>{
        if(e.target.value===pw){
            setCpw(true);
        }else{
            setCpw();
        }
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
                        <input type={'password'} placeholder='비밀번호 확인' onChange={checkpw}></input>
                        </div>
                        <div>
                            <button className='login_btn'>회원가입</button>
                        </div>
                        <div style={{visibility:`${cpw?'hidden':'visible'}`, fontSize:'13px', fontWeight:'600'}}>
                            <p> ! 비밀번호 불일치</p>
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
