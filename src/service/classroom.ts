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
//  删除借口
export const DelteMangerRoom = (params:any) => {
  return requerst.delete('/manger/room/delete',{data:params});
};

