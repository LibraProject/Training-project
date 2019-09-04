import request from '../utils/requerst'

// 获取试题
export let getQuestion = (params:object)=>{
    return request.get('/exam/questions/condition',{params})
}