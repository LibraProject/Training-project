import React from 'react'
import Loadable from 'react-loadable'

function Loading(){
    return <div>Loading...</div>
}

const Add=Loadable({
    loader:()=>import('../views/home/user/add.tsx'),
    loading:Loading
})

const AddTest=Loadable({
    loader:()=>import('../views/home/exam/addTest.tsx'),
    loading:Loading
    
})

const ClassRoom=Loadable({
    loader:()=>import('../views/home/classManage/classroom.tsx'),
    loading:Loading
})

const Classify=Loadable({
    loader:()=>import('../views/home/test/classify.tsx'),
    loading:Loading
})

const Exhibition=Loadable({
    loader:()=>import('../views/home/user/exhibition.tsx'),
    loading:Loading
})

const Grade=Loadable({
    loader:()=>import('../views/home/classManage/grade.tsx'),
    loading:Loading
})

const Home=Loadable({
    loader:()=>import('../views/home/index.tsx'),
    loading:Loading    
})

const List=Loadable({
    loader:()=>import('../views/home/exam/list.tsx'),
    loading:Loading
    
})

const Login=Loadable({
    loader:()=>import('../views/login/index.tsx'),
    loading:Loading
})

const Look=Loadable({
    loader:()=>import('../views/home/test/look.tsx'),
    loading:Loading
    
})

const Rank=Loadable({
    loader:()=>import('../views/home/test/rank.tsx'),
    loading:Loading
})

const Student=Loadable({
    loader:()=>import('../views/home/classManage/student.tsx'),
    loading:Loading
})

const Special=Loadable({
    loader:()=>import('../views/home/parpes/special.tsx'),
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
    from:'/',
    to:'/login'
}]

export default routes