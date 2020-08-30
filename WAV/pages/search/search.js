// pages/search/search.js
var myDate = new Date();
// 获取日期
function formate_data(myDate) {
  let month_add = myDate.getMonth() + 1;
  var formate_result = myDate.getFullYear() + '-'
    + month_add + '-'
    + myDate.getDate()
  return formate_result;
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date:formate_data(myDate),
    actAddress:["1km半径范围内","3km半径范围内","3km半径范围内","更远"],
    actAddressIndex:"0",
    actOrg:["资环青协","其它"],
    actOrgIndex:"0",
    actCtg:["敬老服务类","阳光助残类","爱心教学类","公益实践类","其它"],
    actCtgIndex:"0",
    actTime:["1小时","1.5小时","2小时","2小时以上"],
    actTimeIndex:"0",
  },

  jumpPage: function (event) {
    wx.navigateTo({
      url: '../search/search_results/search_results',
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
  //改变地点
  bindAddressChange: function (e) {
    this.setData({
      actAddressIndex: e.detail.value
      })
    },
  //改变组织
  bindOrgChange: function (e) {
    this.setData({
      actOrgIndex: e.detail.value
      })
    }, 
   //改变类别
   bindCtgChange: function (e) {
    this.setData({
      actCtgIndex: e.detail.value
      })
    },
   //改变时长
   bindTimeChange: function (e) {
    this.setData({
      actTimeIndex: e.detail.value
      })
    },
  //改变日期
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
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