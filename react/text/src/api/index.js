import httpAxios from '../utils/http';
export const login = (params) => httpAxios.post("/login", params)
export const register = (params) => httpAxios.post("/register", params)
export const allVote = (params) => httpAxios.get(' /vote/allVote', {
    params
});
export const newvote = (params) => httpAxios.post(' /vote/newvote',
    params
);
export const add = (params) => httpAxios.get(' /group/list', {
    params
});