import {
    DELETE_DATA,
    DELETE_DATA_FAILED,
    DELETE_DATA_SUCCESS,
    GET_DATA, GET_DATA_FAILED, GET_DATA_SUCCESS,
    POST_DATA,
    POST_DATA_FAILED,
    POST_DATA_SUCCESS
} from "../contants/message";

const userInitialState = {
    loading: false,
    error: '',
    dataSource: [],
    message: '',
}

const userReducer = (state = userInitialState, action) => {
    const {type, payload} = action;
    const newState = type => ({
        GET_USER: {...state, message: GET_DATA, loading: true, error: '',},
        GET_USER_SUCCESS: {...state, message: GET_DATA_SUCCESS, loading: false, dataSource: payload?.userLists, error: '',},
        GET_USER_FAILED: {...state, message: GET_DATA_FAILED, loading: false, error: payload?.error,},
        DELETE_USER: {...state, message: DELETE_DATA, error: '',},
        DELETE_USER_SUCCESS: {...state, message: DELETE_DATA_SUCCESS, error: '',},
        DELETE_USER_FAILED: {...state, message: DELETE_DATA_FAILED, error: payload?.error,},
        POST_USER: {...state, message: POST_DATA, error: '',},
        POST_USER_SUCCESS: {...state, message: POST_DATA_SUCCESS, error: '',},
        POST_USER_FAILED: {...state, message: POST_DATA_FAILED, error: payload?.error,},
    })[type] || state;
    return newState(type);
}

export default userReducer;