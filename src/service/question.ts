import request from '../utils/requerst'

// 获取试题
export const getQuestion = (params:object)=>{
    return request.get('/exam/questions/condition',{params})
}

// 考试类型获取成功
export const examType = ()=>{
    return request.get('/exam/examType')
}

// 题目类型获取成功
export const getQuestionsType = ()=>{
    return request.get('/exam/getQuestionsType')
}
// 添加试题类型
export const addQuestions = (params:object)=>{
    console.log(params)
    return request.get('/exam/insertQuestionsType',{params})
}

