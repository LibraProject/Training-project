import {observable,action} from "mobx"
import { login } from '../../service/index'
class User{
    @observable isLogin = false;
    @action async login(from){
        const result = await login(from)
        return result.code
    }
}

export default User