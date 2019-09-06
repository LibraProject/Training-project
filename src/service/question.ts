import request from '../utils/requerst'

// 获取试题
<<<<<<< HEAD
export const getQuestion = (params:object)=>{
=======
export let getQuestion = (params:object)=>{
    console.log(params)
>>>>>>> dcd3847a21309ec2dbef380ef06b4f5c2031bf0a
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

// 所有的课程获取成功
export let subject = ()=>{
    return request.get('/exam/subject')
}
// 添加试题类型
export const addQuestions = (params:object)=>{
    console.log(params)
    return request.get('/exam/insertQuestionsType',{params})
}
