/*
 * @Author: Cumelmell
 * @Date: 2018-05-15 11:27:33
 * @Last Modified by: Cumelmell
 * @Last Modified time: 2018-05-15 16:11:11
 */
// 1.0.1引入封装的weRequse方法
import weRequset from '../utils/wxRequest'
// 1.0.2引入全局路径
import appConfig from '../utils/appConfig'

// 1.0.3设置请求API的根路径
weRequset.baseUrl = `${appConfig.HTTP_BAST_URL}/api/public/v1/`

// 1.0.4封装请求API,类似axios
// 获取轮播图图片
const getHomeSwiper = params => weRequset('home/swiperdata', params).then(res => res.data)

// 获取分类标签
const getNav = params => weRequset('home/catitems', params).then(res => res.data)

// 获取楼层数据
const getFool = params => weRequset('home/floordata', params).then(res => res.data)

// 1.0.5把封装的API导出,这里是统一导出
export default {
  getHomeSwiper,
  getNav,
  getFool
}
