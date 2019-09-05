import request from '../utils/requerst'

// 获取试题
export let getQuestion = (params:object)=>{
    return request.get('/exam/questions/condition',{params})
}

// 考试类型获取成功
export let examType = ()=>{
    return request.get('/exam/examType')
}

// 题目类型获取成功
export let getQuestionsType = ()=>{
    return request.get('/exam/getQuestionsType')
}