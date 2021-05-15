import {fetchEnhancer} from "../util/fetch";

function isSuccess(args){
    const {status, ok} = args;
    return status >= 200 && status < 300 && ok
}

export const getUserService = () => {
    return new Promise((resolve, reject) => {
        fetchEnhancer(`/api/users`).then(res => res && res.json()).then(data => resolve(data)).catch(error => reject(error));
    })
}

export const deleteUserService = index => {
    return new Promise((resolve, reject) => {
        fetchEnhancer(`/api/users/${index}`, {
            method: "DELETE",
        }).then((res) => isSuccess(res) ? resolve() : reject());
    })
}

export const postUserService = formValue => {
    return new Promise((resolve, reject) => {
        fetchEnhancer(`/api/users`, {
            method: "POST",
            body: formValue,
        }).then((res) => isSuccess(res) ? resolve() : reject());
    })
}

