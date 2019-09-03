import React from 'react'
import RouteMap from './map'
import routes from './routes'
import {BrowserRouter} from 'react-router-dom'

function RouteView (){
  return <BrowserRouter><RouteMap routes={routes}/></BrowserRouter>
}

export default RouteView