import { observable, action } from 'mobx'
import { exam, foundExam, delExam, updateExam, teacherExam } from '../../service/index'


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
     @action async delExam(id:any): Promise<any> {
        const result: any = await delExam(id);
        return result
    }

    // 更新考试
    @action async updateExam(id:any,params:any): Promise<any> {
        const result: any = await updateExam(id,params);
        return result
    }

    // 考试类型获取(教室端，列表详情)
    @action async teacherExam(id:any): Promise<any> {
        const result: any = await teacherExam(id);
        // console.log(result)
        return result
    }

}

export default ExamMsg;