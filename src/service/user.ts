import requerst from "../utils/requerst";

// 登录
export let login = (params: object) => {
  return requerst.post("/user/login", params);
};

// 展示用户信息
export const getUserMsg = () => {
  return requerst.get("/user/user");
};
