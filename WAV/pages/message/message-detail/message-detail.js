// pages/message/message-detail/message-detail.js
var messages = require('../../../data/message.js');
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
    // 获取页面参数值
    var messageId = options.id;
    this.message = messages.messageList[messageId-1];
    this.setData({
      message: this.message
    });
    this.setAnimation();
  },
  setAnimation: function () {
    //定义动画
    var animationUp = wx.createAnimation({
      timingFunction: 'ease-in-out'
    })

    this.animationUp = animationUp
  },
  onUpTap:function(){
    if (!this.message.upStatus) {
      //如果当前状态是未收藏
      this.message.upNum++;
      this.message.upStatus = true;
  } else {
      // 如果当前状态是收藏
      this.message.upNum--;
      this.message.upStatus = false;
  }
    this.setData({
      'message.upStatus': this.message.upStatus,
      'message.upNum': this.message.upNum
    });
    // 添加动画，先变大爱心，再恢复
    this.animationUp.scale(2).step();
    this.setData({
      animationUp: this.animationUp.export()
    })
    setTimeout(function () {
      this.animationUp.scale(1).step();
      this.setData({
        animationUp: this.animationUp.export()
      })
    }.bind(this), 500);

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