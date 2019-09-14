import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

const RouterView = (props) => {
	const {routes} = props;
	const router = routes.filter(el=>!el.redirect);
	const redirect = router.filter(el=>el.redirect).map(item=><Redirect key={item.path} from={item.path} to={item.redirect}/>)
	return <Switch>
		{
			router.map((item, index) =><Route key={index} path={item.path} render={(props)=>{
				if(item.children){
					return <item.component routes={item.children} {...props}></item.component>
				}else{
					return <item.component {...props}></item.component>
				}
			}}/>).concat(redirect)
		}
	</Switch>


}

export default RouterView