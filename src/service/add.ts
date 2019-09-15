import request from '../utils/requerst'

//获取身份id
export let getIdentity=()=>{
    return request.get('/user/identity')
}

// 获取视图id
export let getUserApiView=()=>{
    return request.get('/user/view_authority')
}

// 获取api接口权限
export let getUserApiType=()=>{
    return request.get('/user/api_authority')
}

// 获取更新用户中的身份id
export let getUserId=()=>{
    return request.get('/user/user')
}

// 添加用户
export let adduser = (params:any)=>{
    return request.post('/user',params)
}

// 添加身份
export let addstatus = (params:any)=>{
    return request.get('/user/identity/edit',{params})
}

// 添加api权限
export let addapi = (params:any)=>{
    return request.get('/user/authorityApi/edit',{params})
}

// 添加视图接口权限
export let addview = (params:any)=>{
    return request.get('/user/authorityView/edit',{params})
}

// 给身份设置api权限
export let setapi = (params:any)=>{
    return request.post('/user/setIdentityApi',params)
}

// 给身份设定视图权限
export let setview = (params:any)=>{
    return request.post('/user/setIdentityView',params)
}

// 更新用户中的身份id
export let updataUser=(params:any)=>{
    return request.put('/user/user',params)
}