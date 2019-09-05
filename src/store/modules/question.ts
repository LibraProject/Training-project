import { observable, action } from 'mobx'
import { getQuestion, examType, getQuestionsType,subject } from '../../service/index'

class Question {

    // 按条件获取试题
    @action async getQuestion(params: any): Promise<any> {
        const result: any = await getQuestion(params);
        // console.log('question...', result);
        return result.data
    }
    // 考试类型获取
     @action async examType(): Promise<any> {
        const result: any = await examType();
        console.log('question...', result);
        return result.data
    }

    // 题目类型获取
    @action async getQuestionsType(): Promise<any> {
        const result: any = await getQuestionsType();
        // console.log('question...', result);
        return result.data
    }

    // 题目类型获取
    @action async subject(): Promise<any> {
        const result: any = await subject();
        // console.log('question...', result);
        return result.data
    }
}

export default Question;