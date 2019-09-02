import React, { Component } from 'react'
import RouteMap from './map'
import routes from './routes'

class RouteView extends Component{
    render(){
        return <RouteMap routes={routes}/>
    }
}

export default RouteView