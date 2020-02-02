import {GET_USERS_RESPONSE, GET_USERS_REQUEST} from "../Constants/actionTypes";
import {HOST_NAME} from "../Constants/system";


export const getUsers = () => {
    return (dispatch) => {
        dispatch({
            type: GET_USERS_REQUEST
        });
        dispatch(() => {
            return fetch(HOST_NAME + '/users',
                {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => response.json())
                .then((json) => {
                    dispatch({
                        type:GET_USERS_RESPONSE,
                        payload: json
                    });
                })
                .catch((err) => console.log(err))
        });
    }
}