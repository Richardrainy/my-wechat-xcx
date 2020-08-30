// pages/welcome/welcome-detail/welcome-detail.js
// 引入活动详情数据模块
var activities = require('../../../data/activity.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  jumpPage: function (event) {
    wx.navigateTo({
      url: '../../search/sign-in/sign-in',
      success: function () {
        console.log("jump success")
      },
      fail: function () {
        console.log("jump failed")
      },
      complete: function () {
        console.log("jump complete")
      }
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取页面参数值
    var activityId = options.id;
    this.activity = activities.activityList[activityId-1];
    this.setData({
      activity:this.activity
    })
  },
  onSignUpTap: function(){
    if (!this.activity.signupStatus) {
      //如果当前状态是未报名
      this.activity.signupNum++;
      this.activity.signupStatus = true;
  } else {
      // 如果当前状态是报名
      this.activity.signupNum--;
      this.activity.signupStatus = false;
  }
    this.setData({
      'activity.signupStatus': this.activity.signupStatus,
      'activity.signupNum': this.activity.signupNum
    })
  },
  onCollectionTap: function(){
    if (!this.activity.collectionStatus) {
      //如果当前状态是未收藏
      this.activity.collectionNum++;
      this.activity.collectionStatus = true;
  } else {
      // 如果当前状态是收藏
      this.activity.collectionNum--;
      this.activity.collectionStatus = false;
  }
    this.setData({
      'activity.collectionStatus': this.activity.collectionStatus,
      'activity.collectionNum': this.activity.collectionNum
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (options) {
    
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