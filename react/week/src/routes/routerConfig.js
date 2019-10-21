import React from 'react'

import Loader from 'react-loadable';

function Loading() {
    return <div > ............ </div>
}

const Province = Loader({
    loader:()=>import("../views/province/province "),
loading:Loading
})

const City=Loader({
    loader:()=>import("../views/city/city"),
    loading:Loading
})
const Index=Loader({
    loader:()=>import("../views/index/index"),
    loading:Loading
})

const routes = [{
    path: "/province",
    component: Province
}, {
   path:"/city",
   component:City
}, {
    path: "/index",
    component: Index
},{
    from:"/",
    to:"/index"
}]
export default routes