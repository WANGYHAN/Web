import {
    baseFetch,
    basePost
} from "./axiosBase";
export async function getModuleTable(condition) {
    let data = await baseFetch("module");
    console.log(data);
    return data;
}
export async function getModule(id) {
    let data = await baseFetch(`module/${id}`);
    return data;
}

export async function newUser(form) {
    let data = await basePost(`newModule`, form);
    console.log(data);
    return data;
}
