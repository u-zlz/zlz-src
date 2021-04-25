//ajax请求封装

import config from './config.js'
/**
 * 
 * 1.0封装功能函数
 *  
 * 
 * 
 * **/
export default (url,data={},method='GET')=>{
  return new Promise((resolve,reject)=>{
    //初始化
    wx.request({
      url: config.host + url,
      data,
      method,
      success:(res)=>{
        console.log(res)
        resolve(res.data) //修改Promise的状态为成功状态
      },
      fail:(err)=>{
        console.log(err)
        reject(err)
      }
    })
  })
}