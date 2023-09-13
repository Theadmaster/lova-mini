/// <reference path="./types/index.d.ts" />

interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    [prop: string]:any
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}