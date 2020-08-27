// pages/message/message.js
// 引入message数据模块
var messages = require('../../data/message.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var messageId = options.id;
    this.messageList = messages.messageList;
    this.setData({
      messageList:this.messageList
    })
  },
  onTapToDetail: function (event) {
    // 获取组件自定义属性名,跳转到详情页面
    var messageId = event.currentTarget.dataset.messageId;
    this.message =  this.messageList[messageId-1];
    // 增加阅读量
    this.message.readingNum++;
    this.setData({
      messageList:this.messageList
    })
    wx.navigateTo({
      url: 'message-detail/message-detail?id='+ messageId,
    })
    
    
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})