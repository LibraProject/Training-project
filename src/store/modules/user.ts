import { observable, action } from 'mobx'
import { login } from '../../service/index'
// import {HttpInfo,HttpType,LoginForm} from '../../types/index'

class User {
    @observable isLogin: boolean = false

    @action async login(form: {
        user_name: string,
        user_pwd: string
    }): Promise<any> {
        const result: any = await login(form)
        console.log('result...', result)
        return result.code
    }
}

export default User