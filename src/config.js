import { hostname } from "os";

/*
 * @Author:jiaxinying
 * @Date: 2018-03-12 22:05:31 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2018-03-12 22:06:55
 * 配置参数
 */

 'use strict'
 const host=''
 export default {
     host,
     service:{
         url:'',
         method:'post',
         baseURL:host,
         headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json',
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          timeout: 60000,
          responseType: 'json'
     }
 }