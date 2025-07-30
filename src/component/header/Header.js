import './Header.scss'
import { FaBars } from "react-icons/fa";
import { MdOutlineSupportAgent } from "react-icons/md";
import { Link } from 'react-router-dom'; 
import { useTranslation } from "react-i18next";
import { useDispatch,useSelector} from 'react-redux';
import { IoIosLogOut } from "react-icons/io";
import "../../Language/i18n"; // Import file cấu hình
import { useState } from 'react';
import {userLogout} from '../../service/userService'
import {refesshUser} from '../../redux/action/userAction'
function Header() {
    const dispastch = useDispatch()
    const   [isVN, setIsVN] = useState(true);
    const isLogin = useSelector(state => state.user.isLogin); 
    const user = useSelector(state => state.user.account); 
  //thông tin user
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  //logout
  const handleLogout = async ()=>{
       let res = await userLogout();
     if(res.data && res.data.EC === 0){
        dispastch(refesshUser());
        localStorage.clear();
     }
  }
  return (
    <>
        <div className='home-header-container'>
          <div className='home-header-content'>
              <div className='left-content'>
                  <FaBars />
                  <div className='header-logo'></div>
              </div>
              <div className='center-content'>
                  <div className='child-content'>
                      <div><b>{t("specialized")}</b></div>
                      <div>{t("findDoctor")}</div>
                  </div>
                  <div className='child-content'>
                      <div><b>{t("mediacal")}</b></div>
                      <div>{t("chooseHospital")}</div>
                  </div>
                  {/* <div className='child-content'>
                      <div><b>Bác sỹ</b></div>
                      <div>Chọn bác sỹ giỏi</div>
                  </div> */}
                  <div className='child-content'>
                      <div><b>{t("package")}</b></div>
                      <div>{t("general")}</div>
                  </div>
              </div>
              <div className='right-content'>
                  <div className='support'><MdOutlineSupportAgent />{t("support")}</div>
                  {/* <div className='flag'>VN</div> */}
                  {isLogin ?
                  <>
                        <div className='user-name'>
                            <span>{user.fistname} {user.lastname}</span>
                            <div className='user-account'>
                                <div className='user-logout' onClick={()=>handleLogout()}><IoIosLogOut /> Đăng xuất</div>
                                <div className='manage-user'>Quản lý tài khoản</div>
                             </div>
                        </div>
                        
                  </>
                  :
                  <>
                    <div className='btn user-login' ><Link to="/login">{t("login")}</Link></div>
                    <div className='btn user-resgister'>{t("res")}</div>
                  </>
                  }
                  <div  className={isVN ? 'language active' : 'language'} onClick={() => {changeLanguage("vi"); setIsVN(true)}} >VI</div>
                  <div className={!isVN ? 'language active' : 'language'} onClick={() => {changeLanguage("en"); setIsVN(false)}}>EN</div>
              </div>
              
          </div>
        </div>

       
    </>
  );
}

export default Header;

