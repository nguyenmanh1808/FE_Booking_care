import { Navigate } from 'react-router-dom';
import { useDispatch,useSelector} from 'react-redux';
import { checkLogin } from '../../service/userService';
import { useEffect, useState } from 'react';
import {refesshUser} from '../../redux/action/userAction'
const GuestRoute =  ({ Component }) => {
    const dispatch = useDispatch();
    const[check, setCheck] = useState(false)
    useEffect(()=>{
      doLogin();
    },[])
    const doLogin = async()=>{
        let result = await checkLogin();
        if(result && result.data){
           setCheck(true);
          console.log("check: đã đăng nhập")
        }
        else{
          dispatch(refesshUser())
        }
    }
    
    return check ? <Navigate to="/"  />:<Component/>
  };
  
  export default GuestRoute;

