import request from '../utils/requerst'

// 获取班级成功
export let approval = ()=>{
    return request.get('/manger/grade')
}
