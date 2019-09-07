// 引入子模块
import User from './modules/user';
import Question from './modules/question'
import ClassRoom from './modules/classroom'

// 实例化模块
const user = new User();
const question=new Question()
const classroom = new ClassRoom()
export default {
    user,
    question,
    classroom
}