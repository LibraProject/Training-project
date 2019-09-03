

//验证 用户传递 账号 密码
export interface LoginForm{
    user_name:string,
    user_pwd:string
}

//验证请求返回值data
export enum HttpType{
    object,
    Array
}

//验证user请求返回值
export interface HttpInfo{
    code:number,
    message:string,
    data?:HttpType
}