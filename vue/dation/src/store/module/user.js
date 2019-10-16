import {
    login as loginAPI
} from "@/api/login";
import Cookies from "js-cookie";

export default {
    state: {
        logined: false,
        userInfo: {}
    },
    mutations: {
        logined(state) {
            state.logined = true;
        },
        logout(state) {
            state.logined = false;
        },
        saveInfo(state, payload) {
            state.userInfo = payload;
        }
    },

    actions: {
        async login({
            state,
            commit,
            dispatch
        }, form) {
            let res = await loginAPI(form);
            if (res.code === 200) {
                console.log("Login success!\nSave Token...OK");
                Cookies.set("token", res.token);
                commit("saveInfo", res.info);
                console.log(res.info);
                commit("route/ROUTE_CHANGED", {
                    to: {
                        path: "/user"
                    }
                });
                commit("logined");
            }
            return res;
        },
        logout(c) {
            Cookies.remove("token");
            c.commit("logout");
        }
    }
};
