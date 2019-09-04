import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

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