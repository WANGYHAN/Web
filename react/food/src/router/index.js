import React from 'react'
import {
    BrowserRouter
} from 'react-router-dom'
import routes from "./routerconfig"
import Routerview from "./routerview"


function RootRouter(){
    return <BrowserRouter>
    < Routerview routes={routes}/>
    </BrowserRouter>
}
export default RootRouter