import { observable, action } from 'mobx'
import { exam } from '../../service/index'

class ExamMsg {

    // 考试类型获取
    @action async exam(): Promise<any> {
        const result: any = await exam();
        console.log(result)
        return result.exam
    }

}

export default ExamMsg;