import React from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
function RouterMap(props){
   
        let {routes} = props;
        let routerArr = routes && routes.filter(el=> !el.redirect);
        let redirectArr = routes && routes.filter(el=> el.redirect).map(el=><Redirect key={el} from={el.path} to={el.redirect}/>);
        return <Switch>
                {
                    routerArr && routerArr.map((item,index)=><Route key={index} path={item.path} render={(props)=>{
                        if(item.children){
                            return <item.component routes={item.children} {...props}></item.component>
                        }else{
                            return <item.component {...props}></item.component>
                        }
                    }}/>).concat(redirectArr)
                }
        </Switch>
    
   
}
export default RouterMap
