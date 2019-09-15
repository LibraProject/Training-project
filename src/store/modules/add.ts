import { observable, action } from "mobx";
import {
  adduser,
  getIdentity,
  getUserApiView,
  getUserApiType,
  getUserId,
  addstatus,
  addapi,
  addview,
  setapi,
  setview,
  updataUser
} from "../../service/index";

class Add {

  // 获取身份id
  @action async getIdentity(): Promise<any> {
    let result: any = await getIdentity();
    // console.log('result...', result);
    return result.data
  }

  // 获取视图id
  @action async getUserApiView(): Promise<any> {
    let result: any = await getUserApiView();
    // console.log('result...', result);
    return result.data
  }

  // 获取api接口权限
  @action async getUserApiType(): Promise<any> {
    let result: any = await getUserApiType();
    // console.log('result...', result);
    return result.data
  }

  // 更新用户中的身份id
  @action async getUserId(): Promise<any> {
    let result: any = await getUserId();
    // console.log('result...', result);
    return result.data
  }

  // 添加用户
  @action async addUser(params: any): Promise<any> {
    console.log(params)
    let result: any = await adduser(params);
    // console.log('result...', result);
    return result
  }

  // 添加身份
  @action async addStatus(params: any): Promise<any> {
    // console.log(params)
    let result: any = await addstatus(params);
    // console.log('result...', result);
    return result
  }

  // 添加api权限
  @action async addApi(params: any): Promise<any> {
    // console.log(params)
    let result: any = await addapi(params);
    // console.log('result...', result);
    return result
  }

  // 添加视图接口权限
  @action async addView(params: any): Promise<any> {
    // console.log(params)
    let result: any = await addview(params);
    // console.log('result...', result);
    return result
  }

  // 给身份设置api权限
  @action async setApi(params: any): Promise<any> {
    // console.log(params)
    let result: any = await setapi(params);
    // console.log('result...', result);
    return result
  }

  // 给身份设定视图权限
  @action async setView(params: any): Promise<any> {
    // console.log(params)
    let result: any = await setview(params);
    // console.log('result...', result);
    return result
  }

   // 更新用户中的身份id
   @action async updataUser(params: any): Promise<any> {
    // console.log(params)
    let result: any = await updataUser(params);
    // console.log('result...', result);
    return result
  }

}

export default Add;
