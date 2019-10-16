import axios from "axios";
import Cookie from "js-cookie";
import store from "@/store";

axios.defaults.baseURL = "http://localhost:8080";
axios.interceptors.response.use(
    function (res) {
        return res;
    },
    function (error) {
        //Global Err code
        let errorString = error.toString();
        if (errorString.includes("Network")) {
            return console.log("Net work error");
        }
        let status = error.response.status;
        let data = error.response.data;
        if (status === 400) {
            console.log(data.msg);
        } else if (status === 401) {
            console.log(data.msg);
        } else if (status === 403) {
            console.log(data.msg);
        } else if (status === 404) {
            console.log("404");
            //not fond request for history
            return "404";
        }

        return Promise.reject(error);
    }
);

function baseFetch(url) {
    let token = Cookie.get("token");
    if (!token) {
        store.commit("logout");
        return "No Token access!";
    }
    return axios({
        url,
        headers: {
            "content-type": "application/json",
            Authorization: token
        }
    }).then(res => {
        if (!res) {
            console.log("not res");
            return;
        }
        return res.data;
    });
}

function basePost(url, form) {
    let token = Cookie.get("token");
    if (!token) {
        store.commit("logout");
        return "No token access!";
    }
    return axios({
        method: "post",
        url,
        headers: {
            "content-type": "application/json",
            Authorization: token
        },
        data: form
    }).then(res => {
        return res.data;
    });
}

function baseDelete(url, set) {
    let token = Cookie.get("token");
    if (!token) {
        store.commit("logout");
        return "No token access!";
    }
    return axios({
        method: "delete",
        url,
        headers: {
            "content-type": "application/json",
            Authorization: token
        },
        data: set
    }).then(res => {
        return res.data;
    });
}
export {
    basePost,
    baseFetch,
    baseDelete
};
export default axios;
