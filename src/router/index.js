import React, { Component } from 'react'
import RouterView from './map'
import routes from './routes'
// import {getToken} from './index'
import store from '../store/index';
// 引入导航守卫
import guardInit,{filterView} from '../utils/permission';
// history 路由
import { createHashHistory } from "history";
// 创建一个browser router
import { Router } from "react-router";

const history = createHashHistory()
const myRoutes = filterView(routes, store.user.viewAuthority);
// console.log(routes, store.user.viewAuthority)
// console.log('myRoutes...', myRoutes, routes);
guardInit(history);
class RouteView extends Component{
    render(){
        return   <Router history={history}>
        <RouterView routes={myRoutes}/>
      </Router>
    }
}

export default RouteView