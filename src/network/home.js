import {request} from 'network/request'
/**请求banner和recommend数据**/
export function getHomeMulidata(){
  return request({
    url:'/home/multidata'
  })  
}
/*请求goods列表*/
export function getHomeGoods(type,page){
  return request({
    url:'/home/data',
    params:{
      type,
      page
    }
  })  
}


