// pages/times/times.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        name: 'gert',
        time: 'Dec 3, 2023',
        text: '迷人的悉尼夜晚。',
        like: 0,
        avatar: '',
        position: 'Australia·Sedny',
        comment: [{name: 'john', text: '喜欢.'}]
      },
      {
        name: 'gert1',
        time: 'Dec 3, 2023',
        text: '迷人的悉尼夜晚。',
        like: 0,
        avatar: '',
        position: 'Australia·Sedny',
        comment: [{name: 'john', text: '喜欢.'}]
      },
      {
        name: 'gert',
        time: 'Dec 3, 2023',
        text: '迷人的悉尼夜晚。',
        like: 0,
        avatar: '',
        position: 'Australia·Sedny',
        comment: [{name: 'john', text: '喜欢.'}]
      },
      {
        name: 'gert',
        time: 'Dec 3, 2023',
        text: '迷人的悉尼夜晚。',
        like: 0,
        avatar: '',
        position: 'Australia·Sedny',
        comment: [{name: 'john', text: '喜欢.'}]
      },
      {
        name: 'gert',
        time: 'Dec 3, 2023',
        text: '迷人的悉尼夜晚。',
        like: 0,
        avatar: '',
        position: 'Australia·Sedny',
        comment: [{name: 'john', text: '喜欢.'}]
      },
      {
        name: 'gert',
        time: 'Dec 3, 2023',
        text: '迷人的悉尼夜晚。',
        like: 0,
        avatar: '',
        position: 'Australia·Sedny',
        comment: [{name: 'john', text: '喜欢.'}]
      },

    ]
  },

  addMoment() {
    wx.navigateTo({
      url: '../publishMoment/publishMoment',
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