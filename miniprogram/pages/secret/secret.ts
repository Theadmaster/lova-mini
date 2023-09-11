// pages/secret/secret.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  leftAnimate() {
    
    // 获取圆形元素的动画对象
    const animation = wx.createAnimation({
      duration: 2000, // 动画持续时间，单位为毫秒
      timingFunction: 'linear', // 动画速度函数，线性速度
    });
    
    // 定义动画关键帧
    animation.translate3d(10,10,0).step(); // 按照您的需求定义位移和旋转动画

    // 更新视图
    this.setData({
      animationData: animation.export(),
    });

  },

  rightAnimate() {

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