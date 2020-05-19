//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    bgimgsrc: "../../image/defpage/defpage_bg.png"
  },
  onLoad: function() {

  },
  getPhoneNumber: function(e) {
    var that = this;
    console.log(e)
    console.log("getPhoneNumberok" + e.detail.errMsg);
    if (e.detail.errMsg == "getPhoneNumber:ok") {
      // wx.request({
      //   url: 'https://..../api/OnLogin/get',
      //   data: {
      //     encryptedData: e.detail.encryptedData,
      //     iv: e.detail.iv,
      //     session_key: app.globalData.session_key

      //   },
      //   method: "get",
      //   success: function(res) {

      //   }
      // })
    }
  }
})