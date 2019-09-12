import request from '../utils/requerst'

// 获取班级成功
export let approval = ()=>{
    return request.get('/manger/grade')
}


// 获取学生试卷列表
export let student = (params:any)=>{
    console.log(params)
    return request.get('/exam/student',{params})
}