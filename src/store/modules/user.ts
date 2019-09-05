import { observable, action } from 'mobx'
import { login } from '../../service/index'
import {setToken,removeToken} from '../../utils/index'
// import {HttpInfo,HttpType,LoginForm} from '../../types/index'

// 获取本地存储的用户信息
let account={}

if (window.localStorage.getItem('account')){
    account = JSON.parse(window.localStorage.getItem('account')+'');
}

class User {
    @observable isLogin: boolean = false
    @observable account:any = account

    @action async login(form:any): Promise<any> {
        const result: any = await login(form)
        // console.log('result...', result)
        if(result.code === 1){

            // 判断用户名和密码
            if(form.remember){
                window.localStorage.setItem('account',JSON.stringify(form))
            }else{
                window.localStorage.removeItem('account')
            }

            // 判断七天免登陆
            if(form.autoLogin){
                setToken(result.token)
            }
        }
        return result
    }

     // 退出登陆
     @action async logout():Promise<any>{
        removeToken();
    }
}

export default User