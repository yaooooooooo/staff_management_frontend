import {
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILED,
    DELETE_USER,
    DELETE_USER_FAILED,
    POST_USER,
    POST_USER_FAILED,
} from '../contants/actionTypes';

import {getUserService, deleteUserService, postUserService} from '../services/user';
import {createMessage} from "../components/Message";
import {GET_DATA_FAILED, GET_DATA_SUCCESS} from "../contants/message";

export const getUserAction = () => {
    return dispatch => {
        dispatch(getUser());
        getUserService()
            .then(res => {
                // message显示
                res ? createMessage()(GET_DATA_SUCCESS) : createMessage()(GET_DATA_FAILED, false);
                dispatch(getUserSuccess(res))
            })
            .catch(error => {
                dispatch(getUserFailed(error))
            })
    }
}

const getUser = () => ({
    type: GET_USER
});

const getUserSuccess = userLists => ({
    type: GET_USER_SUCCESS,
    payload: {
        userLists,
    },
})

const getUserFailed = error => ({
    type: GET_USER_FAILED,
    payload: {error}
});

export const deleteUserAction = index => {
    return dispatch => {
        dispatch(deleteUser());
        deleteUserService(index)
            .then(() => dispatch(getUserAction()))
            .catch(error => dispatch(deleteUserFailed(error)))
    }
}

const deleteUser = () => ({
    type: DELETE_USER
});

const deleteUserFailed = error => ({
    type: DELETE_USER_FAILED,
    payload: {error}
});


export const postUserAction = formValue => {
    return dispatch => {
        dispatch(postUser());
        postUserService(formValue)
            .then(() => dispatch(getUserAction()))
            .catch(error => dispatch(postUserFailed(error)))
    }
}

const postUser = () => ({
    type: POST_USER
});

const postUserFailed = error => ({
    type: POST_USER_FAILED,
    payload: {error}
});