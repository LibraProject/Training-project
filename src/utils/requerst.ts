import axios from 'axios'
import { AxiosResponse } from 'axios/index'
import { message } from 'antd'
import { getToken } from './index'

const instance = axios.create({
    // 后台主路径
    baseURL:'http://169.254.198.188:7001',
    timeout:1000,
    headers: { 'authorization': getToken() }
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
    if(response.status !== 200 ){
      if(response.status == 201){
        return response.data;
      }
      message.error(response.statusText)
    }
    return response.data;
  },  (error) =>{
    // Do something with response error
    console.log('error...',error)
    if(error.response.status && error.response.status !== 200){
      message.error(error.response.statusText)
    }
    
    return Promise.reject(error);
  }
);

export default instance;