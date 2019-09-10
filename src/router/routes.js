import React from 'react'
import Loadable from 'react-loadable'

function Loading(){
    return <div>Loading...</div>
}

let Add=Loadable({
    loader:()=>import('../views/home/user/add.tsx'),
    loading:Loading
})

let AddTest=Loadable({
    loader:()=>import('../views/home/exam/addTest.tsx'),
    loading:Loading 
})

let AddQuestion=Loadable({
    loader:()=>import('../views/home/test/addQuestion'),
    loading:Loading 
})

let ClassRoom=Loadable({
    loader:()=>import('../views/home/classManage/classroom.tsx'),
    loading:Loading
})

let Classify=Loadable({
    loader:()=>import('../views/home/test/classify.tsx'),
    loading:Loading
})

let Detail=Loadable({
    loader:()=>import('../views/home/test/detial.tsx'),
    loading:Loading
})

let Edit=Loadable({
    loader:()=>import('../views/home/exam/edit.tsx'),
    loading:Loading
})

let Exhibition=Loadable({
    loader:()=>import('../views/home/user/exhibition.tsx'),
    loading:Loading
})

let Grade=Loadable({
    loader:()=>import('../views/home/classManage/grade.tsx'),
    loading:Loading
})

let Home=Loadable({
    loader:()=>import('../views/home/index.tsx'),
    loading:Loading    
})

let List=Loadable({
    loader:()=>import('../views/home/exam/list.tsx'),
    loading:Loading
    
})

let Login=Loadable({
    loader:()=>import('../views/login/index.tsx'),
    loading:Loading
})

let Look=Loadable({
    loader:()=>import('../views/home/test/look.tsx'),
    loading:Loading
    
})

let Rank=Loadable({
    loader:()=>import('../views/home/test/rank.tsx'),
    loading:Loading
})

let Student=Loadable({
    loader:()=>import('../views/home/classManage/student.tsx'),
    loading:Loading
})

let Special=Loadable({
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
        component:AddQuestion,
        path:'/home/addQuestion/:id'
    },{
        component:ClassRoom,
        path:'/home/classRoom'
    },{
        component:Classify,
        path:'/home/classify'
    },{
        component:Detail,
        path:'/home/detail/:id'
    },{
        component:Edit,
        path:'/home/edit'
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