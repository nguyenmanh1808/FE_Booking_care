import instance from '../axios/axiosCustomize'

const checkLogin = ()=>{
    return instance.get('/me',{ withCredentials: true })
}
const userLogin = (data)=>{
    return instance.post('/login',{data});
}

const userLogout = ()=>{
    return instance.get('/logout');
}

export {
    userLogin,checkLogin,userLogout
}