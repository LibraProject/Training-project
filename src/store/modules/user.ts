//引入mobx  
import {observable, action} from 'mobx'
//引入 登录模块
import {login} from '../../service/index'
//引入 验证规则
// import {HttpInfo, HttpType, LoginForm} from '../../types/index'

// mobx  函数模块   验证
class User{
    
    @observable isLogin:boolean = false;
    @action async login (form:{
        user_name:string,
        user_pwd:string
    }): Promise<any>{
        console.log(form,'---------');
        let result: any = await login(form);
        console.log(result)
        return result.code
    }
}
export default User