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
export let delExam = ()=>{
    return request.delete('/exam/exam/w5tcy-g2dts')
}