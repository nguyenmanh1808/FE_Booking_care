export const FECTH_USER_LOGIN_SUCCESS = 'FECTH_USER_LOGIN_SUCCESS'
export const REFRESH_USER = 'REFRESH_USER'
export const loginSuccess = (data)=>{
    return{
        type:FECTH_USER_LOGIN_SUCCESS,
        payload:  data
    }
}

export const refesshUser = ()=>{
    return{
        type: REFRESH_USER
    }
}