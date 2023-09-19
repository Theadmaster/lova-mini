// pages/secret/secret.ts
// @ts-nocheck
import * as api from "../../utils/request"
import * as audioManage from "../../utils/audioManager"


Page({

  /**
   * 页面的初始数据
   */
  data: {
    goHidden: true,
    textInfo: {text: '', countdown: 60},
    textList: [{text: '深情对视15秒钟', countdown: 15}, {text: '拥抱20秒', countdown: 20}],
    timerLock: false,
    textIndex: 0,
    timer: 0,
    pageSize: 10,
    audioManager: {},
  },

  // 开始计时
  startTap() {
    if (this.data.timerLock) {
      return;
    } else {
      this.setData({
        timerLock: true
      })
    }
    // 开始计时音频
    this.data.audioManager.play('/miniprogram/assets/audio/start.mp3')
    
    let textInfo = this.data.textInfo
    let timer = setInterval(() => {
      if (textInfo.countdown <= 0 ) {
        // 计时结束音频
        // this.data.innerAudioContextEnd.play()
        clearInterval(timer);
        this.setData({
          timerLock: false
        })
      } else {
        textInfo.countdown--;
      }
      this.setData({
        textInfo: textInfo
      })
    }, 1000)

    this.setData({
      timer: timer
    })
  },

  // 下一个挑战
  async nextTap() {
    
    let {textIndex, textList, timerLock, timer, pageSize} = this.data
    

    if (timerLock) {
      clearInterval(timer);
    }
    if (textIndex >= pageSize) {
      await this.getSentences()
    }
    this.setData({
      textIndex: ++textIndex,
      textInfo: textList[textIndex],
      timerLock: false,
      timer: 0
    })
  },

  // go开始
  goAnimate() {
    this.leftAnimate()
    this.rightAnimate()
    setTimeout(() => {
      this.setData({
        goHidden: false
      })
    }, 1000);


  },
  leftAnimate() {
    // 获取圆形元素的动画对象
    const animation = wx.createAnimation({
      duration: 400, // 动画持续时间，单位为毫秒
      timingFunction: 'linear', // 动画速度函数，线性速度
    });

    animation.translateX(140).rotate(360).step(); 
    
    // 更新视图
    this.setData({
      leftAnimationData: animation.export(),
    });

  },

  rightAnimate() {
    // 获取圆形元素的动画对象
    const animation = wx.createAnimation({
      duration: 500, // 动画持续时间，单位为毫秒
      timingFunction: 'linear', // 动画速度函数，线性速度
    });

    animation.translateX(-140).rotate(360).step(); 
    this.setData({
      rightAnimationData: animation.export(),
    });
  },

  goTap() {

  },

  goback() {
    wx.switchTab({
      url: '../home/home'
    })
  },
  

  // 获取语料
  getSentences() {
    api.post('/getSentences', {pageSize: this.data.pageSize}).then( (res:any) => {
      // console.log(res);
      this.setData({
        textIndex: 0,
        textList: res.data.data,
        textInfo: res.data.data[0]
      })
      
    }).catch( (err: any) => {
      console.log(err);
      
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.getSentences()
    const audioManager = audioManage.InnerAudio()
    audioManager.create()
    this.setData({
      audioManager: audioManager
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    const { timer } = this.data
    clearInterval(timer)
    this.setData({
      timerLock: false,
      timer: 0,
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})