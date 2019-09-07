import { action } from "mobx";
import {  getMangerRoom,  getMangerGrade,  addMangerRoom,  DelteMangerRoom,  addMangerGrade,getMangerStudent,delMangerStudent } from "../../service/index";

class Classroom {
  //  获取教室接口
  @action async getMangerRoom(): Promise<any> {
    const result: any = await getMangerRoom();
    return result.data;
  }
  //  获取已经分配教室的班级的接口
  @action async getMangerGrade(): Promise<any> {
    const result: any = await getMangerGrade();
    return result.data;
  }

  // 添加教室
  @action async addMangerRoom(params: any): Promise<any> {
    const result: any = await addMangerRoom(params);
    return result.msg;
  }

  // 添加班级
  @action async addMangerGrade(params: any): Promise<any> {
    const result: any = await addMangerGrade(params);
    console.log(result)
    return result.msg;
  }

  // 删除教室
  @action async DelteMangerRoom(params: any): Promise<any> {
    const result: any = await DelteMangerRoom(params);
    return result.msg;
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
