// pages/secret/secret.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  goAnimate() {
    this.leftAnimate()
    this.rightAnimate()
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

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