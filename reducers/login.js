import {SIGN_IN, SIGN_OUT} from "../Constants/actionTypes";

const initialState = {
    isLogin:false
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case SIGN_IN:
            return {
                ...state,
                isLogin: true,
            };
        case SIGN_OUT:
            return {
                ...state,
                isLogin:false
            };
        default:
            return state;
    }
}