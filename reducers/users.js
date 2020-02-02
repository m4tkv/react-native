import {GET_USERS_REQUEST, GET_USERS_RESPONSE} from "../Constants/actionTypes";

const initialState = {
    users: [],
    fetchingUsers:false
};

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                fetchingUsers: true,
            };
        case GET_USERS_RESPONSE:
            return {
                ...state,
                users: action.payload,
                fetchingUsers: false,
            };
        default:
            return state;
    }
}