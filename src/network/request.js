import axios from 'axios'

/*************新实例的instance 本身后面就可以加then和catch 
 * 其实就是一个promise,所以去除 promise 把 这个promise  返回 */
export function request(config){
  //1.创建对应的axios实例
  const instance = axios.create({
    baseURL:'http://106.54.54.237:8000/api/v1',
    timeout:5000
  })
  //2.axios 拦截器
  //2-1 拦截请求 request
  instance.interceptors.request.use(config => {
   // console.log(config); //请求发送成功走这里 
    /** 
     * 1.此处给config中添加一些信息 例如 header等
     *2.比如每次发送网络请求时，希望再界面显示一个loading的图标，可以在此处设置
     然后再响应成功中去除
     *3.某些网络请求（比如登录token）必须携带的一些特殊信息
     ********************************
     处理完以上信息以后需要想config返回 ，如不返回 请求拦截到此 不会继续进行
     后面则无法继续使用
     */
    return config;//如不返回 信息则被拦截 后面无法使用

  },err => {   //请求没有发送出去 走这里
    console.log(err);  
  })
  //2-1 拦截响应 response
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => {
    console.log(err)
  })

  //3.发送真正的网络请求 
  return instance(config) 
} 
export function request1(config){
  //1.创建对应的axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  //2.axios 拦截器
  //2-1 拦截请求 request
  instance.interceptors.request.use(config => {
   // console.log(config); //请求发送成功走这里 
    /** 
     * 1.此处给config中添加一些信息 例如 header等
     *2.比如每次发送网络请求时，希望再界面显示一个loading的图标，可以在此处设置
     然后再响应成功中去除
     *3.某些网络请求（比如登录token）必须携带的一些特殊信息
     ********************************
     处理完以上信息以后需要想config返回 ，如不返回 请求拦截到此 不会继续进行
     后面则无法继续使用
     */
    return config;//如不返回 信息则被拦截 后面无法使用

  },err => {   //请求没有发送出去 走这里
    console.log(err);  
  })
  //2-1 拦截响应 response
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    return res.data
  }, err => {
    console.log(err)
  })

  //3.发送真正的网络请求 
  return instance(config) 
} 
//使用
/*request({
  baseConfig:{
    url:'/home/moltidata'
  },then(res => {
    resolve(res);
  }),catch(err => {
    reason(err);
  })

})*/
//promise 方式
// export function request(config){
//   return new Promise((resolve,reject) => {
//   //1.创建对应的axios实例
//   const instance = axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   //发送真正的网络请求
//   instance(config)
//     .then(res => {
//     resolve(res);
//   })
//     .catch(res => {
//     reject(err);
//   })
//   })
// }



/**回调函数方式  
export function request(config){
  //1.创建对应的axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  //发送真正的网络请求
  instance(config.baseConfig)
  .then(res => {
    config.success(res);
  })
  .catch(res => {
    config.failure(err);
  })
}
//使用
request({
  baseConfig:{
    url:
  },success:function(res){

  },failure:function(err){

  }

})*/