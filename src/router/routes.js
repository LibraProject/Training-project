import React from 'react'
import Loadable from 'react-loadable'

function Loading(){
    return <div>Loading...</div>
}

let Home=Loadable({
    loader:()=>import('../views/home/home.tsx'),
    loading:Loading
    
})

let Login=Loadable({
    loader:()=>import('../views/login/index.tsx'),
    loading:Loading
})

const routes=[{
    component:Login,
    path:'/login'
    
},{
    component:Home,
    path:'/home'
    
},{
    path:'/',
    redirect:'/home'
}]

export default routes