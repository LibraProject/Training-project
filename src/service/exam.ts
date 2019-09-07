import request from '../utils/requerst'

// 获取试题
export let exam = ()=>{
    return request.get('/exam/exam')
}
