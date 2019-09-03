import request from '../utils/request'

//登录借口
//params 值为对象 
export let login = (params:object)=>{
    return request.post('/user/login',params)
}