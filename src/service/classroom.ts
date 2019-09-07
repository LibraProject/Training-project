import requerst from "../utils/requerst";

// 获取全部教室
export const getMangerRoom = () => {
  return requerst.get("/manger/room");
};

export const getMangerGrade = () => {
  return requerst.get("/manger/grade");
};