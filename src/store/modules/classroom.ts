import {action } from 'mobx'
import {getMangerRoom,getMangerGrade,addMangerRoom,DelteMangerRoom} from '../../service/index'

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

    // 添加教室
    @action async addMangerRoom(params:any):Promise<any>{
        const result: any = await addMangerRoom(params);
        return result.msg
    }
    // 删除教室
    @action async DelteMangerRoom(params:any):Promise<any>{
        const result: any = await DelteMangerRoom(params);
        console.log(result)
        return result.msg
    }
}

export default Classroom;