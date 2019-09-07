import {action } from 'mobx'
import {getMangerRoom,getMangerGrade} from '../../service/index'

class Classroom {
    //  获取教室接口
    @action async getMangerRoom():Promise<any>{
        const result: any = await getMangerRoom();
        return result.data
    }
    //  获取已经分配教室的班级的接口
    @action async getMangerGrade():Promise<any>{
        const result: any = await getMangerGrade();
        return result.data
    }
}

export default Classroom;