import { action } from 'mobx'
import { getMangerRoom, getMangerGrade, getMangerStudent, delMangerStudent } from '../../service/index'

class Classroom {
    //  获取教室接口
    @action async getMangerRoom(): Promise<any> {
        const result: any = await getMangerRoom();
        return result.data
    }
    //  获取已经分配教室的班级的接口
    @action async getMangerGrade(): Promise<any> {
        const result: any = await getMangerGrade();
        return result.data
    }
    //  获取学生管理接口
    @action async getMangerStudent(): Promise<any> {
        const result: any = await getMangerStudent();
        return result.data
    }
    //  删除学生管理接口
    @action async delMangerStudent(params: any): Promise<any> {
        const result: any = await delMangerStudent(params);
        return result
    }
}

export default Classroom;