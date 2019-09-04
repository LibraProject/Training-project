import requerst from '../utils/requerst'

// 登录
export let login =(params)=>{
    return requerst.post('/user/login',params)
}