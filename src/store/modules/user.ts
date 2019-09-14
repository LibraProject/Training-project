import { observable, action } from "mobx";
import { login, getUserInfo, getViewAuthority, getUserMsg, getAllUser } from "../../service/index";
import { setToken, removeToken } from "../../utils/index";
// import {HttpInfo,HttpType,LoginForm} from '../../types/index'

// 获取本地存储的用户信息
let account = {};

if (window.localStorage.getItem("account")) {
  account = JSON.parse(window.localStorage.getItem("account") + "");
}

class User {
  @observable isLogin: boolean = false;
  @observable account: any = account;
  // 声明用户信息
  @observable userInfo: any = {};
  // 用户头像地址
  @observable avatar: string = '';
  // 用户视图权限
  @observable viewAuthority: object[] = [];
  @action async login(form: any): Promise<any> {
    const result: any = await login(form);
    if (result.code === 1) {
      // 判断用户名和密码
      if (form.remember) {
        window.localStorage.setItem("account", JSON.stringify(form));
      } else {
        window.localStorage.removeItem("account");
      }
      // 判断七天免登陆
      if (form.autoLogin) {
        setToken(result.token);
      }
    }
    return result;
  }

  // 退出登陆
  @action async logout(): Promise<any> {
    removeToken();
  }

  // 获取用户信息
  @action async getUserInfo(): Promise<any> {
    let userInfo: any = await getUserInfo();
    // console.log('userInfo...', userInfo);
    this.userInfo = userInfo.data;
    this.getViewAuthority();
  }

  //  展示用户信息
  @action async getUserMsg(): Promise<any> {
    const result: any = await getUserMsg()
    return result.data
  }
  // 获取用户权限
  @action async getViewAuthority(): Promise<any> {
    let viewAuthority: any = await getViewAuthority();
    // console.log('viewAuthority...', viewAuthority);
    this.viewAuthority = viewAuthority.data;
  }

  // 获取用户权限
  @action async getAllUser(params: string): Promise<any> {
    let result: any = await getAllUser(params);
    console.log(result)
    return result.data
  }

  // 修改用户头像
  @action changeAvatar(avatar: string): void {
    this.avatar = avatar;
  }

}

export default User;
