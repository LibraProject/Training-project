// 引入子模块
import User from './modules/user';
import Question from './modules/question'

// 实例化模块
const user = new User();
const question=new Question()

export default {
    user,
    question
}