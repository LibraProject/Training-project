import request from '../utils/requerst'

// 获取试题
export let exam = ()=>{
    return request.get('/exam/exam')
}

// 获取试题
export let foundExam = (params:object)=>{
    return request.post('/exam/exam',params)
}

// 删除试题
export let delExam = (id:any)=>{
    console.log(id)
    return request.delete(`/exam/exam/${id}`)
}

//更新试题列表
export let updateExam = (exam_exam_id:any,params:any)=>{
    return request.put(`/exam/exam/${exam_exam_id}`,params)
}

// 获取试题（教师端）
export let teacherExam = (exam_exam_id:object)=>{
    console.log(exam_exam_id)
    return request.get(`/exam/exam/${exam_exam_id}`)
}