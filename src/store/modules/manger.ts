import { observable, action } from 'mobx'
import { approval } from '../../service/index'

class Manger {

    // 考试类型获取
    @action async approval(): Promise<any> {
        const result: any = await approval();
        // console.log(result)
        return result.data
    }

}

export default Manger;