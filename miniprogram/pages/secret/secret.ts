// pages/secret/secret.ts
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
    indexArr: [],
    timer: {}
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
    let textInfo = this.data.textInfo
    let timer = setInterval(() => {
      if (textInfo.countdown <= 0 ) {
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
  nextTap() {
    
    let {indexArr, textIndex, textList, timerLock} = this.data

    if (timerLock) {
      clearInterval(this.data.timer);
    }
    this.setData({
      textInfo: textList[indexArr[textIndex]],
      textIndex: ++textIndex >= indexArr.length? indexArr.length-1 : textIndex,
      timerLock: false,
      timer: {}
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
    
    // 定义动画关键帧
    // animation.translate3d(28,-84,0).step(); 
    // animation.translate3d(56,-112,0).step();
    // animation.translate3d(84,-128.3,0).step();
    // animation.translate3d(112,-137.2,0).step();
    // animation.translate3d(140,-140,0).step();
    // animation.translate3d(168,-137.2,0).step(); 
    // animation.translate3d(196,-128.3,0).step();
    // animation.translate3d(224,-112,0).step();
    // animation.translate3d(252,-84.2,0).step();
    // animation.translate3d(280,0,0).step();
    
    // animation.translate3d(252,84.2,0).step();
    // animation.translate3d(224,112,0).step();
    // animation.translate3d(196,128.3,0).step();
    // animation.translate3d(168,137.2,0).step(); 
    // animation.translate3d(140,140,0).step();
    // animation.translate3d(112,137.2,0).step();
    // animation.translate3d(84,128.3,0).step();
    // animation.translate3d(56,112,0).step();
    // animation.translate3d(28,84,0).step(); 
    // animation.translate3d(0,0,0).step();

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
    wx.navigateBack()
  },
  
  // 生成随机数
  shuffleNumbers(n:number):Array<number> {
    // 创建包含0到n-1的初始数组
    const initialArray = Array.from({ length: n }, (_, i) => i);
  
    // 使用 Fisher-Yates 洗牌算法混乱数组
    for (let i = initialArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [initialArray[i], initialArray[j]] = [initialArray[j], initialArray[i]];
    }
  
    return initialArray;
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    let arr:Array<number> = this.shuffleNumbers(this.data.textList.length)
    let index = this.data.textIndex;
    this.setData({
      indexArr: arr,
      textInfo: this.data.textList[arr[index]],
      textIndex: ++this.data.textIndex
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