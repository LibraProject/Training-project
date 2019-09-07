import requerst from "../utils/requerst";

// 获取全部教室号
export const getMangerRoom = () => {
  return requerst.get("/manger/room");
};

// 获取班级名
export const getMangerGrade = () => {
  return requerst.get("/manger/grade");
};

// 获取学生管理
export const getMangerStudent = () => {
  return requerst.get("/manger/student");
};

// 删除学生接口
export const delMangerStudent = (params:any) => {
  return requerst.delete(`/manger/student/${params}`);
};