import React, { Component } from 'react'
import RouteMap from './map'
import routes from './routes'
import { BrowserRouter } from 'react-router-dom'

class RouteView extends Component{
    render(){
        return  <BrowserRouter>
                <RouteMap routes={routes}/>
        </BrowserRouter>
    }
}

export default RouteView