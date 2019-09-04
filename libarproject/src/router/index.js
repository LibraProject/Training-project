import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import RouterView from './routerview'
import routes from './routes'
function Routers(){
    return <BrowserRouter>
        <RouterView routes={routes}/>
    </BrowserRouter>
}
export default Routers