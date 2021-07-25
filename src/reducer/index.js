import { DATA_LOAD } from "../constants/action-type";

const initialState = {
    imageList: []
}
function rootReducer(state = initialState, action) {

    switch (action.type) {
        case DATA_LOAD:
            return {
                ...state,
                imageList: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;