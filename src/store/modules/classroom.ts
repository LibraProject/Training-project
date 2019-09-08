import { action } from "mobx";
import { getMangerRoom, getMangerGrade, addMangerRoom, DelteMangerRoom, addMangerGrade, DelteMangerGrade, UpdateMangerGrade } from "../../service/index";

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

  // 删除班级
  @action async DelteMangerGrade(params: any): Promise<any> {
    const result: any = await DelteMangerGrade(params);
    return result.msg;
  }

   // 更新班级信息接口
   @action async UpdateMangerGrade(params: any): Promise<any> {
    const result: any = await UpdateMangerGrade(params);
    return result.msg;
  }
}

export default Classroom;
