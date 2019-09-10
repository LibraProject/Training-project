import { observable, action } from 'mobx'
import { exam, foundExam, delExam } from '../../service/index'

class ExamMsg {

    // 考试类型获取
    @action async exam(): Promise<any> {
        const result: any = await exam();
        // console.log(result)
        return result.exam
    }

     // 添加考试
     @action async foundExam(params:object): Promise<any> {
        const result: any = await foundExam(params);
        return result
    }

     // 删除考试
     @action async delExam(): Promise<any> {
        const result: any = await delExam();
        return result
    }


}

export default ExamMsg;