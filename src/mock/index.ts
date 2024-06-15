import Mock from 'mockjs';
import loginApi from '@/api/user';
// 重写mockjs send方法
Mock.XHR.prototype.send = (() => {
    const _send = Mock.XHR.prototype.send;
  
    return function() {
      if (!this.match) {
        this.custom.xhr.responseType = this.responseType || ''
        this.custom.xhr.timeout = this.timeout || 0
        this.custom.xhr.withCredentials = this.withCredentials || false
        this.custom.xhr.onabort = this.onabort || null
        this.custom.xhr.onerror = this.onerror || null
        this.custom.xhr.onload = this.onload || null
        this.custom.xhr.onloadend = this.onloadend || null
        this.custom.xhr.onloadstart = this.onloadstart || null
        this.custom.xhr.onprogress = this.onprogress || null
        this.custom.xhr.onreadystatechange = this.onreadystatechange || null
        this.custom.xhr.ontimeout = this.ontimeout || null
      }
      return _send.apply(this, arguments)
    }
  })();
  
  
// 设置拦截Ajax请求的响应时间，模拟网络延迟,才能检测到数据变化
Mock.setup({
    timeout: '200-600'
});
// Mock数据示例
// Mock.mock('/api/getList', {
//     'list|10-20': [{
//         'id|+1': 1,
//         'title': '@ctitle(10, 20)',
//         'image': '@image(\'200x100\', \'#50B347\', \'Hello\')',
//         'datetime': '@datetime()',
//         'author': '@cname()',
//         'description': '@ctitle(30, 100)'
//     }]
// })
// export default Mock;
Mock.mock(/\/user\/login/,'get', loginApi.login)
 
export default Mock;
 
 
// 注1：如何同时拦截get/post请求，并对get和post请求大小写不敏感呢？那就请使用正则表达式吧
// Mock.mock(url, /post|get/i, loginInfo)
// 注2：Mockjs如何拦截带参数的GET请求
// Mock.mock(RegExp(url + ".*"), /post|get/i, {...});
// // 注3：定义拦截路由配置最简单的方式就是使用POST请求，并且不在URL中添加参数(推荐)
// //导入测试数据
// import loginInfo from '@/mock/json/login-mock.js'
 
//模拟Ajax请求
// Mock.mock(url, "post", loginInfo)
// Mock.mock(url,/post|get/i,(options)=>{
//     return Mock.mock(loginInfo)
// })
 
 
 
