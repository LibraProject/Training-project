import { observable, action } from 'mobx'
import { getQuestion, examType, getQuestionsType, subject, userInfo, addQuestion } from '../../service/index'

class Question {

    // 按条件获取试题
    @action async getQuestion(params: any): Promise<any> {
        // console.log(params)
        let exam_id = null,
            questions_type_id = null,
            subject_id = null,
            questions_id=null
        if (params !== undefined) {
            if (params.exam_id) {
                exam_id = params.exam_id
            }
            if (params.questions_type_id) {
                questions_type_id = params.questions_type_id
            }
            if (params.subject_id) {
                subject_id = params.subject_id
            }
            if (params.questions_id) {
                questions_id = params.questions_id
            }
        }
        
        const result: any = await getQuestion({ exam_id, questions_type_id, subject_id, questions_id });
        // console.log('question...', result);
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

    // 获取用户信息
    @action async userInfo(): Promise<any> {
        const result: any = await userInfo();
        // console.log('question...', result);
        return result.data
    }

    // 添加试题
    @action async addQuestion(params: any): Promise<any> {
        const result: any = await addQuestion(params);
        // console.log('question...', result);
        return result
    }
}

export default Question;