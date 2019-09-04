import React from 'react'
import Loadable from 'react-loadable'

function Loading(){
    return <div>Loading...</div>
}

const Add=Loadable({
    loader:()=>import('../views/home/user/add.jsx'),
    loading:Loading
})

const AddTest=Loadable({
    loader:()=>import('../views/home/exam/addTest.jsx'),
    loading:Loading
    
})

const ClassRoom=Loadable({
    loader:()=>import('../views/home/classManage/classroom.jsx'),
    loading:Loading
})

const Classify=Loadable({
    loader:()=>import('../views/home/test/classify.jsx'),
    loading:Loading
})

const Exhibition=Loadable({
    loader:()=>import('../views/home/user/exhibition.jsx'),
    loading:Loading
})

const Grade=Loadable({
    loader:()=>import('../views/home/classManage/grade.jsx'),
    loading:Loading
})

const Home=Loadable({
    loader:()=>import('../views/home/index.jsx'),
    loading:Loading    
})

const List=Loadable({
    loader:()=>import('../views/home/exam/list.jsx'),
    loading:Loading
    
})

const Login=Loadable({
    loader:()=>import('../views/login/index.jsx'),
    loading:Loading
})

const Look=Loadable({
    loader:()=>import('../views/home/test/look.jsx'),
    loading:Loading
    
})

const Rank=Loadable({
    loader:()=>import('../views/home/test/rank.jsx'),
    loading:Loading
})

const Student=Loadable({
    loader:()=>import('../views/home/classManage/student.jsx'),
    loading:Loading
})

const Special=Loadable({
    loader:()=>import('../views/home/parpes/special.jsx'),
    loading:Loading
})

const routes=[{
    component:Login,
    path:'/login'
    
},{
    children:[{
        component:Add,
        path:'/home/add'
    },{
        component:AddTest,
        path:'/home/addTest'
    },{
        component:ClassRoom,
        path:'/home/classRoom'
    },{
        component:Classify,
        path:'/home/classify'
    },{
        component:Exhibition,
        path:'/home/exh'
    },{
        component:Grade,
        path:'/home/grade'
    },{
        component:List,
        path:'/home/list'
    },{
        component:Look,
        path:'/home/look'
    },{
        component:Rank,
        path:'/home/rank'
    },{
        component:Student,
        path:'/home/student'
    },{
        component:Special,
        path:'/home/special'
    }],
    component:Home,
    path:'/home'
    
},{
    path:'/',
    redirect:'/login'
}]

export default routes