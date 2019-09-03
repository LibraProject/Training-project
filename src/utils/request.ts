import axios from 'axios'
import {AxiosResponse} from 'axios/index';
import {HttpInfo} from '../types/index'
//代理请求 
const instance = axios.create({
    baseURL: 'http://169.254.198.188:7001',
    timeout: 1000, //延迟事件 
    // headers: {'X-Custom-Header': 'foobar'}
})

// 请求拦截器
instance.interceptors.request.use( (config) =>{
    // Do something before request is sent
    return config;
  }, (error)=> {
    // Do something with request error
    return Promise.reject(error);
  }
);
 
// 响应拦截器
instance.interceptors.response.use( (response: AxiosResponse<any>) =>{
    // Do something with response data
    return response.data;
  },  (error) =>{
    // Do something with response error
    return Promise.reject(error);
  }
);

export default instance;