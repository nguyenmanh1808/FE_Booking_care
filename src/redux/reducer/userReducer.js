import { FECTH_USER_LOGIN_SUCCESS,REFRESH_USER} from "../action/userAction";

const INIT_STATE = {
    account:{
        fistname:'',
        lastname:'',
    },
    isLogin:false
}

const userReducer = (state= INIT_STATE, action)=>{
    switch(action.type){
        case FECTH_USER_LOGIN_SUCCESS:
            return {
                ...state,account:{
                    fistname: action.payload.firstName,
                    lastname: action.payload.lastName,
                },
                isLogin:true
            }

        case REFRESH_USER:
            return {
                ...state,account: null,
                        isLogin:false
            }
        default: return state
    }
}

export default userReducer