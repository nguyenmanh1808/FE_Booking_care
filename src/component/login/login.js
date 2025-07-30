import './login.scss'
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEyeSlash } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useState } from 'react';
import { userLogin } from '../../service/userService';
import {loginSuccess} from '../../redux/action/userAction'
import { toast } from 'react-toastify';
import { useDispatch,useSelector} from 'react-redux';
import {Link, useNavigate } from "react-router-dom"
const Login = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassWord] = useState('');
    const [displayPassword,setDisPlayPassword] = useState(true);
    const [errMessage,setErrMessage] = useState('')
/// function
    const dispatch = useDispatch();
    let history = useNavigate();
    // check email
    const validateEmail = (email) => {
        return email.match(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      };
    const handleLogin = async()=>{
        if(!email){
            setErrMessage("Email không được để trống!");
        }
        if(!password){
            setErrMessage("Mật khẩu không được để trống!")
        }
        else{
            if(validateEmail(email)){
                let data = {
                    email: email,
                    password: password
                } 
                let result = await userLogin(data);
                if(result && result.data && result.data.EC === 0){
                    dispatch(loginSuccess(result.data.DT))
                    toast.success(result.data.EM);
                    history('/')
                }
                else{
                    setErrMessage(result.data.EM);
                }
            }
            else{
                setErrMessage("Email không hợp lệ!")
            }
        }
       
    }


    return (
        <>
            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row">
                        <div className='col-12 text-login'>Login</div>
                        <div className='col-12 form-group login-input'>
                            <label>Email:</label>
                            <input type='text' value={email}  className='form-control' placeholder='Enter your email' onChange={(e)=>{setEmail(e.target.value);setErrMessage()}}/>
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <input type={displayPassword ? 'password' : 'text'} value={password} className='form-control' placeholder='Enter your password' onChange={(e)=>{setPassWord(e.target.value);setErrMessage('')}} />
                            {displayPassword ? <FaRegEyeSlash className='hid-password' onClick={()=>setDisPlayPassword(false)}/> :
                             <IoEyeOutline className='dis-pasword' onClick={()=>setDisPlayPassword(true)}/> 
                               
                            }   
                        </div>
                       { errMessage &&
                             <div className='col-12' style={{color:"red",fontSize:'12px'}}>
                                    *{errMessage}
                             </div>
                       }
                        <div className='col-12'>
                            <button className='btn-login' onClick={()=>handleLogin()}>Login</button>
                        </div>
                        <div className='col-12  '>
                            <a href='#' className='forgot-password'>Forgot password ?</a>
                        </div>
                        <div className='col-12  text-center mt-2'>
                            <span className='orther-login'>Or login with:</span>
                        </div>
                        <div className='col-12 cocial-login '>
                            <IoLogoFacebook className='face-icon'/>
                            <FcGoogle className='google-icon'/>   
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;