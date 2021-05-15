import {createMessage} from "../components/Message";
import {RESPONSE_FAILED} from "../contants/message";
import store from "../store";

let requestInterceptors = [];
let responseInterceptors = [];
const defaultUrl = "";

function checkStatus(response) {
    const {status, ok} = response;
    if (status >= 200 && status < 300) {
        console.log(store.getState())
        return response;
    }
    if (status >= 500) {
        createMessage()(RESPONSE_FAILED, false);
    } else {
        response.json().then(data => {
            createMessage()(data.message, false);
        });
    }
    return {status, ok};
}

export function fetchEnhancer(url, init = {}) {
    if (!init.method) {
        init.method = 'GET';
    }
    requestInterceptors.forEach(interceptors => {
        init = interceptors(init);
    });

    return new Promise(function (resolve, reject) {
        fetch(defaultUrl + url, init)
            .then(checkStatus)
            .then(res => {
                responseInterceptors.forEach(interceptors => {
                    res = interceptors(res);
                });
                resolve(res);
            }).catch(err => {
            reject(err);
        })
    })
}

fetchEnhancer.interceptors = {
    request: {
        use: function (cb) {
            const index = requestInterceptors.indexOf(cb);
            if (index >= 0) {
                requestInterceptors.splice(index, 1);
            }
            requestInterceptors.push(cb);
        }
    },
    clearRequest: function () {
        requestInterceptors = [];
    },
    response: {
        use: function (cb) {
            responseInterceptors.push(cb);
        }
    },
    clearResponse: function () {
        responseInterceptors = [];
    },
    clearAll: function () {
        requestInterceptors = [];
        responseInterceptors = [];
    }
}

fetchEnhancer.interceptors.request.use(init => {
    init['headers'] = {};
    init['headers']['Content-Type'] = 'application/json; charset=UTF-8';
    // token = localStorage.getItem('token');
    // init['headers']['token'] = token;
    return init;
});
