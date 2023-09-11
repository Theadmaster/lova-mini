// pages/home.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heartAnimation: false,  
  },

  animateHeart: function() {  
    let _this = this;
    this.animate('.heart', [
      { scale: [1, 1], rotate: 0, ease: 'ease-out'  },
      { scale: [1.1, 1.1], rotate: -2, ease: 'ease-out' },
      { scale: [1.2, 1.2], rotate: 3, ease: 'ease-out' },
      { scale: [1.1, 1.1], rotate: -2, ease: 'ease-in' },
      { scale: [1, 1], rotate: 0 },
      ], 50, function () {
        _this.clearAnimation('#container', { opacity: true, rotate: true }, function () {
          console.log("清除了#container上的opacity和rotate属性")
        })
    }.bind(this))

    
  }, 
  // 进入秘密花园
  secretTap() {
    console.log(121);
    
    wx.navigateTo({
      url: '../secret/secret',
      events: {
        // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
        acceptDataFromOpenedPage: function(data: any) {
          console.log(data)
        },
        someEvent: function(data: any) {
          console.log(data)
        }
      },
      success: function(res) {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', { data: 'test' })
      }
    })
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