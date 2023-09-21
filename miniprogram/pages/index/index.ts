// index.ts
// 获取应用实例
// const app = getApp<IAppOption>()
import * as api from "../../utils/request"

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs',
    })
  },
  onLoad() {
    // @ts-ignore
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  
  getUserProfile() {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res:any) => {
        console.log(res)
        // @ts-ignore
        wx.setStorage('userInfo', res.userInfo)
        api.post('/mini/userInfo', {...res, openId: wx.getStorageSync('openid'), 
                                  sessionKey: wx.getStorageSync('sessionKey')})
           .then(res => {
             console.log(res);
           }).catch( err => {
             console.log(err);
           })
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e: any) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // @ts-ignore
  userLogin() {
    wx.login({
      success (res) {
        if (res.code) {
          console.log(res.code);
          //发起网络请求
          api.post('/mini/login', {code: res.code}).then( (res: any) => {
            let data = res.data
            wx.setStorageSync('openid', data.openid)
            wx.setStorageSync('sessionKey', data.session_key)
          }).catch( err => {
            console.log(err);
            
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }
})
