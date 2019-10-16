import Cookies from "js-cookie";
/*
 * Author hyx
 */
const TokenKey = "Admin-Token";

export function getToken() {
    return Cookies.get(TokenKey);
}

export function setToken(token) {
    return Cookies.set(TokenKey, token);
}

export function removeToken() {
    console.log("removeToken");
    return Cookies.remove(TokenKey);
}
