
import './App.scss';
import Footer from './component/footer/footer';
import Header from './component/header/Header';
import { Outlet } from "react-router-dom";
import { checkLogin } from './service/userService';
import { useEffect,useState } from "react";
import { useDispatch,useSelector} from 'react-redux';
import { loginSuccess, refesshUser } from './redux/action/userAction';
import { io } from 'socket.io-client';
const socket = io('http://localhost:5000'); // kết nối tới server
const publicKey = 'BPYEHoh83hqWTWzHqb_FeMvfs9g9SCWfUD8IIHpHFr_fbVpbTIg_F_lJCoEyFpfVGQK9GJL5v4EibCG7dKVyQcQ';

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map(char => char.charCodeAt(0)));
}

const App = () => {
  const isLogin = useSelector(state => state.user.isLogin); 
 
  const dispatch = useDispatch();
  useEffect(() => {
  check();
    }, []);
    const check = async()=>{
      let res = await checkLogin(); 
        if(res){
            if(isLogin){
              console.log('1');
              console.log('ko cần nap');
            }
            else{
              console.log('2');
              dispatch(loginSuccess(res.data.user));
            }
        }
        else{
          console.log('3');
          dispatch(refesshUser());
        }
    }
  return (
    <div className="app-container"> 
      
        <div className='header-container'>
          <Header/>
        </div>
        <div className='main-container'>
          <Outlet/>
        </div>
        <div className='footer-container'>
          <Footer/>
      </div>
       
    </div>
  )
}

export default App;
