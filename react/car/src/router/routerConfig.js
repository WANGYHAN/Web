import React from 'react'
import Loadable from 'react-loadable'

function Loading() {
    return <img src = "../img/timg.gif" />
}
const Index = Loadable({
    loader: () => import("../views/index"),
    loading: Loading
})
const Login = Loadable({
    loader: () => import("../views/login"),
    loading: Loading
})
const Search = Loadable({
    loader: () => import("../views/search"),
    loading: Loading
})
const Myself = Loadable({
    loader: () => import("../views/myself"),
    loading: Loading
})

const Home = Loadable({
    loader: () => import("../views/index/home"),
    loading: Loading

})
const Floor = Loadable({
    loader: () => import("../views/index/floor"),
    loading: Loading

})
const Frunt = Loadable({
    loader: () => import("../views/index/frunt"),
    loading: Loading

})
const Lower = Loadable({
    loader: () => import("../views/index/lower"),
    loading: Loading

})
const Save = Loadable({
    loader: () => import("../views/index/save"),
    loading: Loading

})
const routes = [{
    path: '/index',
    component: Index,
    children: [{
        path: '/index/home',
        component: Home
    }, {
        path: '/index/floor',
        component: Floor
    }, {
        path: '/index/frunt',
        component: Frunt
    }, {
        path: '/index/lower',
        component: Lower
    }, {
        path: '/index/save',
        component: Save
    }, {
        from: '/index',
        to: '/index/home'
    }]
}, {
    path: '/login',
    component: Login
}, {
    path: '/search',
    component: Search
}, {
    path: '/myself',
    component: Myself
}, {
    from: '/',
    to: '/index'
}]
export default routes