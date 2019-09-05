import { observable, action } from 'mobx'
import { getQuestion } from '../../service/index'

class Question {

    // 按条件获取试题
    @action async getQuestion(params: any): Promise<any> {
        let result: any = await getQuestion(params);
        console.log('question...', result);
<<<<<<< HEAD
        return result;
        
=======
        return result.data
>>>>>>> f871f66f0b9f76cd3993fea4ae014877e91b973d
    }
}

export default Question;