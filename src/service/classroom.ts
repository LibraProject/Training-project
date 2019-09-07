import requerst from "../utils/requerst";

// 获取全部教室号
export const getMangerRoom = () => {
  return requerst.get("/manger/room");
};

// 获取所有班级名
export const getMangerGrade = () => {
  return requerst.get("/manger/grade");
};

  // 添加教室
export const addMangerRoom = (params:any) => {
  return requerst.post("/manger/room",params);
};

// 添加班级
export const addMangerGrade = (params:any) => {
  return requerst.post("/manger/grade",params);
};

//  删除接口
export const DelteMangerRoom = (params:any) => {
  return requerst.delete('/manger/room/delete',{data:params});
};

// 获取学生管理
export const getMangerStudent = () => {
  return requerst.get("/manger/student");
};

// 删除学生接口
export const delMangerStudent = (params:any) => {
  return requerst.delete(`/manger/student/${params}`);
};
