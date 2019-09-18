import requerst from "../utils/requerst";

// 登录
export let login = (params: object) => {
  return requerst.post("/user/login", params);
};

// 获取用户权限
export let getViewAuthority = ()=>{
  return requerst.get('/user/view_authority');
}

// 展示用户信息 用户数据
export const getUserMsg = () => {
  return requerst.get("/user/user");
};

// 获取用户信息
export let getUserInfo = ()=>{
  return requerst.get('/user/userInfo');
}

// 用户信息展示

export const getAllUser = (path:string)=>{
  return requerst.get(path);
}

// 更新用户信息
export const UpdataUser = (obj:any)=>{
  return requerst.put('/user/user',obj);
}
