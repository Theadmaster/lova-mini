// pages/publishMoment/publishMoment.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rules: [],
    formData: {
      location: '浙江省杭州市西湖区文三路',
      text: '',
      images: '',
      video: ''
    }
  },
  // 获取地址
  getLocation() {

  },
  selectFile(files) {
    console.log('files', files);
    
  },

  uploadFile(files) {
    console.log('upload files', files);
    
    return new Promise((resolve, reject) => {
      // upload
    })
    
  },

  uploadFail(e) {
    console.log('upload fail ', e)
  },

  uploadSuccess(e) {
    console.log('upload success', e);  
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    wx.setNavigationBarTitle({
      title: '发布时刻'
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