import requerst from "../utils/requerst";

// 登录
export let login = (params: object) => {
  return requerst.post("/user/login", params);
};

// 展示用户信息 用户数据
export const getUserMsg = () => {
  return requerst.get("/user/user");
};

// 获取用户权限
export let getViewAuthority = ()=>{
  return requerst.get('/user/view_authority');
}

// 获取用户信息
export let getUserInfo = ()=>{
  return requerst.get('/user/userInfo');
}

// 展示用户信息 身份数据
export const getUserIdentity = () => {
  return requerst.get("/user/identity");
};

// 展示用户信息 api接口权限
export const getUserAuthority = () => {
  return requerst.get("/user/api_authority");
};

// 展示用户信息 身份和api接口关系
export const getUserAuthorityRelation = () => {
  return requerst.get("/user/identity_api_authority_relation");
};

// 展示用户信息 视图接口权限
export const getUserViewAuthority = () => {
  return requerst.get("/user/view_authority");
};

// 展示用户信息 身份和视图权限关系
export const getUserRelation = () => {
  return requerst.get("/user/identity_view_authority_relation");
};