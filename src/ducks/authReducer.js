import Axios from 'axios'

const initialState = {
    username: '',
    user_id: null,
    profile_pic: '',
    redirect: false
}

const REGISTER_USER = 'REGISTER_USER';
const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';

export function registerUser(newUser) {
    
    return {
       type: REGISTER_USER,
       payload: Axios.post('/auth/register', newUser)
    }
 }

export function loginUser(user) {
    return {
       type: LOGIN_USER,
       payload: Axios.post('/auth/login', user)
    }
 }

export function logoutUser() {
    Axios.post('/auth/logout')
 
    return {
       type: LOGOUT_USER
    }
 }


export default function reducer(state = initialState, action){
    const {type, payload} = action;

    switch(type){
        case `${REGISTER_USER}_FULFILLED`:
         return {
            ...state,
            user_id: payload.data.user_id,
            username: payload.data.username,
            profile_pic: payload.data.profile_pic,
            redirect: true
         };
         case `${LOGIN_USER}_FULFILLED`:
            
         return {
            ...state,
            user_id: payload.data.user_id,
            username: payload.data.username,
            profile_pic: payload.data.profile_pic,
            redirect: true
         };
         case LOGOUT_USER:
         return {
            userId: null,
            username: '',
            profile_pic: '',
            redirect: false
         };
        default: return state
    }
}