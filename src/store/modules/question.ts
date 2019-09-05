import { observable, action } from 'mobx'
import { getQuestion, examType, getQuestionsType } from '../../service/index'

class Question {

    // 按条件获取试题
    @action async getQuestion(params: any): Promise<any> {
        let result: any = await getQuestion(params);
        // console.log('question...', result);
        return result.data
    }
    // 考试类型获取
    @action async examType(type: any): Promise<any> {
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
}

export default Question;