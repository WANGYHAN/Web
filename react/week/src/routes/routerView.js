import React from 'react'
import {
    Switch,
    Redirect,
    Route
} from 'react-router-dom'


function RouterView(props){
    console.log(props)
     let {routes}=props
     let RouteArr=routes&&routes.filter(item=>!item.to)
     let RedirectArr=routes&&routes.filter(item=>item.to).map((item,index)=><Redirect key={index} from={item.from} to={item.to}></Redirect>)
return <Switch>
{
    RouteArr && RouteArr.map((item,index)=><Route key={index} path={item.path} render={(props)=>{
        return <item.component {...props} children={item.children}/>
    }
    }
    />).concat(RedirectArr)
}
   </Switch>

}
export default RouterView