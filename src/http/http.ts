//http->http.ts
import axios from 'axios'
//axios.create 创建一个axios实例  我们给这个实例编写配置，后续所有通过实例发送的请求，都受当前配置约束
const http = axios.create({
    baseURL: '',//域名
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

// 添加请求拦截器
http.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // config.headers.token='123123123'
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
http.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let data = response.data;
    console.log(response)
    return data;
}, function (error) {
    console.log('error:' + error)
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default http