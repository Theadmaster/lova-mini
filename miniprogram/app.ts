// app.ts
App<IAppOption>({
  globalData: {
    baseUrl: 'http://127.0.0.1:3000/api/v1',
    // baseUrl: 'https://gertyt.cn/api/v1',
    
  },
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        console.log(res.code)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      },
    })
  },
})