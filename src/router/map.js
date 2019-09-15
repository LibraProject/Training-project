import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const RouterView = ({ routes }) => {
	return <Switch>
		{routes.map((item, index) => {
			return item.path
				? <Route key={index} path={item.path} render={(props) => {
					return item.children && item.children.length
						? <item.component {...props}>
							<RouterView routes={item.children} />
						</item.component>
						: <item.component {...props}></item.component>
				}}></Route>
				: <Redirect key={item.from} from={item.from} to={item.to}></Redirect>
		})}
	</Switch>
}

export default RouterView