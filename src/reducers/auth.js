import {
    AUTH_USER,
    UNAUTH_USER,
    AUTH_ERROR,
    SET_OTP,
    OTP_SENT,
    LOGIN_ERROR,
    SET_PASS_MSG,
} from '../constants/ActionTypes';

const initialState = {
    message:"",
    isLogin:false,
    token:"",
    role:"Customer",
    otp:"",
    messageLogin:'',
    passMessage:'',


};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_PASS_MSG:
            return{ ...state, passMessage: action.message }
        case SET_OTP:
            return{ ...state, otp: action.otp }
        case OTP_SENT:
            return{ ...state, message: action.message }
        case AUTH_USER:
            return { ...state, currentUser: action.user, message: '', isLogin: true, token: action.token,role:action.role }
        case UNAUTH_USER:
            return { ...state, currentUser: null, isLogin: false, role:"Customer" }
        case AUTH_ERROR:
            return { ...state, message: action.message }
        case LOGIN_ERROR:
            return { ...state, messageLogin: action.message }
        default:
            return state
    }
}