import React from 'react'
import Loadable from 'react-loadable'

function Loading(){
    return <div>Loading...</div>
}

let Add=Loadable({
    // loader:()=>import('../views/home/user/add.tsx'),
    loader:()=>import('../views/home/user/index.tsx'),
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

let Correct=Loadable({
    loader:()=>import('../views/home/parpes/correctExam.tsx'),
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
        path:'/home/add',
        title:'addUser'
    },{
        component:AddTest,
        path:'/home/addTest',
        title:'addTest'
    },{
        component:AddQuestion,
        // view_id: "63no9p-8y0k4",
        path:'/home/addQuestion/:id',
        title:'detail'
    },{
        component:ClassRoom,
        // view_id: "63no9p-8y0k4",
        path:'/home/classRoom',
        title:'classRoom'
    },{
        component:Classify,
        path:'/home/classify',
        title:'classify'
    },{
        component:Correct,
        path:'/home/correct',
        title:'correct'    
    },{
        component:Detail,
        // view_id: "63no9p-8y0k4",
        path:'/home/detail/:id',
        title:'detail'  
    },{
        component:Edit,
        path:'/home/edit',
        title:'detail'   
    },{
        component:Exhibition,
        path:'/home/exh',
        title:'exhibition'
    },{
        component:Grade,
        path:'/home/grade',
        title:'grade'
    },{
        component:List,
        path:'/home/list',
        title:'list'
    },{
        component:Look,
        path:'/home/look',
        title:'look'
    },{
        component:Rank,
        path:'/home/rank',
        title:'rank'
    },{
        component:Student,
        path:'/home/student',
        title:'student'
    },{
        component:Special,
        path:'/home/special',
        title:'special'
    }],
    component:Home,
    path:'/home'
    
},{
    from:'/',
    to:'/login'
}]

const list = [
    {
        component:Login,
        path:'/login'
        
    },
    {
        component:Home,
        path:'/home',
        children:[
            {
                id: "sub1",
                icon: "sliders",
                title: "试题管理",
                children: [
                  {
                      component:Rank,
                      path:'/home/rank',
                      title:'rank'
                  },
                  {
                    component:Classify,
                    path:'/home/classify',
                    title:'classify'
                  },
                  {
                      component:Look,
                      path:'/home/look',
                      title:'look'
                  }
                ]
              },
              {
                id: "sub2",
                icon: "user",
                title: "用户管理",
                children: [
                  {
                    component:Add,
                    path:'/home/add',
                    title:'addUser'
                  },
                  {
                    component:Exhibition,
                    path:'/home/exh',
                    title:'exhibition'
                  }
                ]
              },
              {
                id: "sub3",
                icon: "schedule",
                title: "考试管理",
                children: [
                  {
                    component:AddTest,
                    path:'/home/addTest',
                    title:'addTest'
                  },
                  {
                    component:List,
                    path:'/home/list',
                    title:'list'
                  }
                ]
              },
              {
                id: "sub4",
                icon: "project",
                title: "班级管理",
                children: [
                  {
                    component:ClassRoom,
                    // view_id: "63no9p-8y0k4",
                    path:'/home/classRoom',
                    title:'classRoom'
                  },
                  {
                    component:Grade,
                    path:'/home/grade',
                    title:'grade'
                  },
                  {
                    component:Student,
                    path:'/home/student',
                    title:'student'
                  }
                ]
              },
              {
                id: "sub5",
                icon: "project",
                title: "阅卷管理",
                children: [
                  {
                    component:Special,
                    path:'/home/special',
                    title:'special'
                  }
                ]
              }
        ]
    },{
        from:'/',
        to:'/login'
    }
  ];

export default routes
// export default list