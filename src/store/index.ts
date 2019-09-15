// 引入子模块
import User from './modules/user';
import Question from './modules/question'
import ClassRoom from './modules/classroom'
import ExamMsg from './modules/examMsg'
import Manger from './modules/manger'
import Global from './modules/global'
import Add from './modules/add'

// 实例化模块
const user = new User();
const question=new Question()
const classroom = new ClassRoom()
const examMsg=new ExamMsg()
const manger=new Manger()
const global = new Global();
const add = new Add();


// 实例化模块
export default {
    user,
    question,
    classroom,
    examMsg,
    manger,
    global,
    add
}



