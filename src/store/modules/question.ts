import { action } from 'mobx'
import { getQuestion, examType, getQuestionsType,addQuestions,subject } from '../../service/index'

class Question {

    // 按条件获取试题
    @action async getQuestion(params: any): Promise<any> {
        const result: any = await getQuestion(params);
        return result.data
    }
    // 考试类型获取
     @action async examType(): Promise<any> {
        const result: any = await examType();
        return result.data
    }

    // 题目类型获取
    @action async getQuestionsType(): Promise<any> {
        const result: any = await getQuestionsType();
        return result.data
    }

    // 课程类型获取
    @action async subject(): Promise<any> {
        const result: any = await subject();
        return result.data
    }
    // 添加试题类型
    @action async addQuestions(params: any): Promise<any> {
        const result: any = await addQuestions(params);
        return result
    }
}

export default Question;