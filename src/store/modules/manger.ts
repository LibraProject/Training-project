import { observable, action } from 'mobx'
import { approval,student } from '../../service/index'

class Manger {

    // 考试类型获取
    @action async approval(): Promise<any> {
        const result: any = await approval();
        // console.log(result)
        return result.data
    }

    // 获取学生试卷列表
    @action async student(params:any): Promise<any> {
        const result: any = await student(params);
        // console.log(result)
        return result
    }

}

export default Manger;