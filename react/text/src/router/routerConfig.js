import React from 'react';
import Loadable from 'react-loadable'

function Loading() {
    return <div > ... </div>
}
const Index = Loadable({
    loader: () => import("../views/Index/Index"),
    loading: Loading
})
const Register = Loadable({
    loader: () => import("../views/Register/Register"),
    loading: Loading
})
const Vote = Loadable({
    loader: () => import("../views/Vote/Vote"),
    loading: Loading
})
const Sponsor = Loadable({
    loader: () => import("../views/Sponsor/Sponsor"),
    loading: Loading
})
const Login = Loadable({
    loader: () => import("../views/Login/Login"),
    loading: Loading
})
const Home = Loadable({
    loader: () => import("../views/Index/Home/Home"),
    loading: Loading
})
const Mine = Loadable({
    loader: () => import("../views/Index/Mine/Mine"),
    loading: Loading
})
const routes = [
    {
        path: "/Index",
        children: [{
            path: "/Index/Home",
            component: Home
        }, {
            path: "/Index/Mine",
            component: Mine
        },
    {
        from:"/Index",
        to:"/Index/Home"
    }],
        component: Index
    },
    {
        path: "/Register",
        component: Register
    },
    {
        path: "/Login",
        component: Login
    },
    {
        path: "/Vote",
        component: Vote
    },
     {
         path: "/Sponsor",
         component: Sponsor
     },
     {
         from: "/",
         to: "/Index"
     }
]
export default routes