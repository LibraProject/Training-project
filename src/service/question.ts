import request from "../utils/requerst";

// 获取试题
export const getQuestion = (params: object) => {
  return request.get("/exam/questions/condition", { params });
};

// 考试类型获取成功
export const examType = () => {
  return request.get("/exam/examType");
};

// 题目类型获取成功
export const getQuestionsType = () => {
  return request.get("/exam/getQuestionsType");
};

// 所有的课程获取成功
export const subject = ()=>{
    return request.get('/exam/subject')
}

// 获取用户信息
export const userInfo = ()=>{
    return request.get('/user/userInfo')
}

// 添加试题类型
export const addQuestion = (params:object)=>{
    return request.get('/exam/insertQuestionsType',{params})
}
