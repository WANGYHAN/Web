import axios from "./axiosBase";

export function login(form) {
    return axios({
        method: "post",
        url: "login",
        headers: {
            "content-type": "application/json"
        },
        data: form
    }).then(res => {
        return res.data;
    });
}
