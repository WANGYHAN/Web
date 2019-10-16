import {
    baseFetch,
    basePost,
    baseDelete
} from "./axiosBase";
export async function getUserTable(condition) {
    let data = await baseFetch("user");
    return data;
}
export async function getUser(id) {
    let data = await baseFetch(`user/${id}`);
    return data;
}

export async function newUser(form) {
    let data = await basePost(`newUser`, form);
    console.log(data);
    return data;
}
export async function deleteUser(idSet) {
    let data = await baseDelete("user", idSet);
    console.log(data);
    return data;
}
