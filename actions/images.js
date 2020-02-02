import {HOST_NAME} from "../Constants/system";
import {GET_IMAGES_REQUEST, GET_IMAGES_RESPONSE} from "../Constants/actionTypes";


export const getImages = () => {
    return (dispatch) => {
        dispatch({
            type: GET_IMAGES_REQUEST
        });
        dispatch(() => {
            return fetch(HOST_NAME + '/photos',
                {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then((response) => response.json())
                .then((json) => {
                    dispatch({
                        type:GET_IMAGES_RESPONSE,
                        payload: json
                    });
                })
                .catch((err) => console.log(err))
        });
    }
};