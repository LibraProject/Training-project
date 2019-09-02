import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

class RouteMap extends Component {
    render() {
        let { routes } = this.props
        let routeArr = routes.filter(item => item.path)
        let routeRed = routes.filter(item => item.from)
        return (
            <BrowserRouter>
                <Switch>
                    {
                        routeArr.map((item, i) => <Route key={i} path={item.path} render={(props) => {
                            return <item.component {...props} routes={item.children} />
                        }} />)
                    }
                    {
                        routeRed.map((item, i) => <Redirect key={i} from={item.from} to={item.to} />)
                    }
                </Switch>
            </BrowserRouter>
        )
    }
}

export default RouteMap