//Page Object
Page({
  data: {
    text1:"本人已明确知晓本次志愿服务活动的具体内容和要求",
    text2:"本人符合本次活动的志愿者资质且真诚希望参与本次活动，决不懈怠",
  },
  jumpPage: function (event) {
    wx.navigateTo({
      url: '../sign-in2/sign-in2',
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
  //options(Object)
  onLoad: function(options){
    
  },
  onReady: function(){
    
  },
  onShow: function(){
    
  },
  onHide: function(){

  },
  onUnload: function(){

  },
  onPullDownRefresh: function(){

  },
  onReachBottom: function(){

  },
  onShareAppMessage: function(){

  },
  onPageScroll: function(){

  },
  //item(index,pagePath,text)
  onTabItemTap:function(item){

  }
});