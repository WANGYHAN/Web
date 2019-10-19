import React from 'react'
import Loader from 'react-loadable'


function Loading(){
    return <div>......</div>
}

const Index = Loader({
    loader: () => import("../views/index/index"),
    loading: Loading
})

const Class=Loader({
    loader:()=>import("../views/class/class"),
    loading:Loading
})

const Collect=Loader({
    loader:()=>import("../views/collect/collect"),
    loading:Loading
})
const Home = Loader({
    loader: () => import("../views/index/home/home"),
    loading: Loading
})
const Rank = Loader({
    loader: () => import("../views/index/rank/rank"),
    loading: Loading
})
const Mine = Loader({
    loader: () => import("../views/index/mine/mine"),
    loading: Loading
})

const routes = [{
    path: "/index",
    children:[
        {
            path: "/index/home",
            component: Home
        }, {
            path: "/index/rank",
            component: Rank
        }, {
            path: "/index/mine",
            component: Mine
        },{
            from:"/index",
            to:"/index/home"
        }
    ],
    component: Index
}, {
    path: "/class/:type",
    component: Class
}, {
    path: "/collect",
    component: Collect
},
{
    from:"/",
    to:"/index"
}]
export default routes