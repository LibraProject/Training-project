import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// class RouteMap extends Component {
//     render() {
//         let { routes } = this.props
//         let routeArr = routes.filter(item => item.path)
//         let routeRed = routes.filter(item => item.from)
//         return (
//             <BrowserRouter>
//                 <Switch>
//                     {
//                         routeArr.map((item, i) => <Route key={i} path={item.path} render={(props) => {
//                             return <item.component {...props} routes={item.children} />
//                         }} />)
//                     }
//                     {
//                         routeRed.map((item, i) => <Redirect key={i} from={item.from} to={item.to} />)
//                     }
//                 </Switch>
//             </BrowserRouter>
//         )
//     }
// }

const RouterView = ({ routes }) => {
	return <BrowserRouter>
		<Switch>
			{routes.map((item, index) => {
				return item.path ? <Route key={index} path={item.path} render={(props) => {
					return item.children && item.children.length ? <item.component {...props}>
						<RouterView routes={item.children} />
					</item.component> : <item.component {...props}></item.component>
				}}></Route> : <Redirect key={item.from} {...item}></Redirect>
			})}
		</Switch>
	</BrowserRouter>

}

export default RouterView


// export default RouteMap