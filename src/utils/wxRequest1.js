/*
 * @Author: Cumelmell
 * @Date: 2018-05-22 20:27:14
 * @Last Modified by: Cumelmell
 * @Last Modified time: 2018-05-22 20:34:40
 */
// 通过import把wepy导入到当前脚本中
import wepy from 'wepy'

// 封装一个用于发送请求的函数
// const weRequset = (url, params = {}) => {
//   return wepy.request({
//     url: weRequset.baseUrl + url, // 开发者服务器接口地址",
//     data: params.data || {}, // 请求的参数",
//     method: params.method || 'GET',
//     dataType: params.dataType || 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
//     header: params.header || {
//       'Content-type': 'application/json'
//     }
//   })
// }
const weRequset = {}

weRequset.get = (url, params = {}) => {
  return wepy.request({
    url: weRequset.baseUrl + url, // 开发者服务器接口地址",
    data: params, // 请求的参数",
    method: 'GET',
    dataType: 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
    header: params.header || {
      'Content-type': 'application/json'
    }
  })
}

weRequset.post = (url, params) => {
  return wepy.request({
    url: weRequset.baseUrl + url, // 开发者服务器接口地址",
    data: params, // 请求的参数",
    method: 'POST',
    dataType: 'json', // 如果设为json，会尝试对返回的数据做一次 JSON.parse
    header: params.header || {
      'Content-type': 'application/json'
    }
  })
}

// 设置基本的url路径
weRequset.baseUrl = ''
export default weRequset
