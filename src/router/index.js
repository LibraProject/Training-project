import * as React from 'react';
import RouteMap from './map'
import {BrowserRouter} from 'react-router-dom'
import routes from './routes'

function Routers(){
    return <BrowserRouter>
        <RouteMap routes={routes}/>
    </BrowserRouter>
}
export default Routers