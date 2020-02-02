import {GET_IMAGES_REQUEST, GET_IMAGES_RESPONSE} from "../Constants/actionTypes";

const initialState = {
    images: [],
    fetchingImages:false
};

export default function imagesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_IMAGES_REQUEST:
            return {
                ...state,
                fetchingImages: true,
            };
        case GET_IMAGES_RESPONSE:
            return {
                ...state,
                images: action.payload,
                fetchingImages: false,
            };
        default:
            return state;
    }
}