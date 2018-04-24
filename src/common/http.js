import axios from 'axios'
import hintPop from "../plugin/hintPop"

//请求超时时间
axios.defaults.timeout = 5000
    // http请求拦截器
axios.interceptors.request.use(request => {
        hintPop.loading();
        console.log("loading...")
        return request
    }, error => {
        hintPop.loadingClose();
        console.log("loading closed")
        console.error("统一请求错误处理")
        hintPop.hint("加载超时");
        return Promise.reject(error)
    })
    // http响应拦截器
axios.interceptors.response.use(response => {
    console.log('%c res success', 'color:#42c02e');
    hintPop.loadingClose();
    return response.data
}, error => {
    hintPop.loadingClose();
    console.error("统一响应错误处理")
    console.log(error.message)
    hintPop.hint(error.message);
    //return Promise.reject(error)
})

export default axios